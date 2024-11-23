import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

val capturaRepo = CapturaRepositorio()
val captura = Captura()
val looca = Looca()

var lastByteRecebidos: Long = 0
var lastByteEnviados: Long = 0
var lastCaptureTime: Long = System.currentTimeMillis()

fun main() {
    capturaRepo.configurar()
    listarInterfaces() // Listar todas as interfaces de rede
    obtemIDMaquina()

    // Atualizar as leituras iniciais para evitar calculos errados na primeira vez.
    val dadosCaptura = looca.rede.grupoDeInterfaces.interfaces[5]
    lastByteRecebidos = dadosCaptura.bytesRecebidos
    lastByteEnviados = dadosCaptura.bytesEnviados

    while (true) {
        capturaBandaLarga()
        capturaRepo.inserirCaptura(captura)
        Thread.sleep(5000)
    }
}

fun listarInterfaces() {
    val interfaces = looca.rede.grupoDeInterfaces.interfaces
    interfaces.forEachIndexed { index, interfaceRede ->
        println("Interface $index: ${interfaceRede.nome}")
        println("Endereço MAC: ${interfaceRede.enderecoMac}")
        println("Bytes Recebidos: ${interfaceRede.bytesRecebidos}")
        println("Bytes Enviados: ${interfaceRede.bytesEnviados}")
    }
}

fun obtemIDMaquina() {
    val enderecoMAC = looca.rede.grupoDeInterfaces.interfaces[5].enderecoMac
    println("MAC Address: $enderecoMAC")
    val fkMaquinaLista = capturaRepo.buscarIdPorMAC(enderecoMAC)

    if (fkMaquinaLista.isNotEmpty()) {
        val fkMaquina = fkMaquinaLista[0]
        captura.setFkMaquinaCaptura(fkMaquina)
    } else {
        println("Erro: Nenhuma máquina encontrada para o endereço MAC $enderecoMAC")
        // Adicionar entrada no banco de dados ou lidar com o erro conforme necessário
        // Aqui está um exemplo simples:
        println("Adicionando máquina com o endereço MAC $enderecoMAC no banco de dados")
        // Captura a exceção se o MAC Address não existir no banco de dados
        capturaRepo.inserirMaquina(enderecoMAC)
        println("Máquina adicionada com sucesso, recarregue a aplicação para continuar")
    }
}

fun capturaBandaLarga() {
    val dadosCaptura = looca.rede.grupoDeInterfaces.interfaces[5]

    val byteRecebidos = dadosCaptura.bytesRecebidos
    val byteEnviados = dadosCaptura.bytesEnviados

    val currentTime = System.currentTimeMillis()
    val elapsedTime = (currentTime - lastCaptureTime) / 1000.0 // Tempo decorrido em segundos

    val bytesRecebidosDiff = byteRecebidos - lastByteRecebidos
    val bytesEnviadosDiff = byteEnviados - lastByteEnviados

    println("Bytes Recebidos Diff: $bytesRecebidosDiff")
    println("Bytes Enviados Diff: $bytesEnviadosDiff")

    lastByteRecebidos = byteRecebidos
    lastByteEnviados = byteEnviados
    lastCaptureTime = currentTime

    if (elapsedTime > 0) {
        val bitsRecebidos = bytesRecebidosDiff * 8
        val bitsEnviados = bytesEnviadosDiff * 8
        val totalBits = bitsRecebidos + bitsEnviados
        val usoBandaLarga = totalBits / (elapsedTime * 1000000.0) // Mbps

        println("Taxa de uso de banda larga: $usoBandaLarga Mbps")

        captura.setDataHoraCaptura(pegaDataHoraCaptura())
        captura.setRegistro(usoBandaLarga)
    } else {
        println("Erro: O tempo decorrido é zero ou negativo.")
    }
}

fun pegaDataHoraCaptura(): String {
    val format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    return LocalDateTime.now().format(format)
}
