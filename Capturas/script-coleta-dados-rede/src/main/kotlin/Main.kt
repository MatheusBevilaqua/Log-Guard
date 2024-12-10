import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

val capturaRepo = CapturaRepositorio()
val captura = Captura()
val looca = Looca()


fun main() {
    capturaRepo.configurar()
   //listarInterfaces() // Listar todas as interfaces de rede

    detectaMaquina()

    while (true) {
        capturaBandaLarga()
        capturaRepo.inserirCaptura(captura)
        capturaPacotesPerdidos()
        capturaRepo.inserirCapturaPacotes(captura)
        Thread.sleep(5000)
    }
}

fun detectaMaquina(){
    obtemIDMaquina()
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

fun formataMAC(enderecoMAC: String):String{
    return enderecoMAC.replace(":", "-").uppercase()
}

fun obtemIDMaquina() {
    var enderecoMAC = looca.rede.grupoDeInterfaces.interfaces[5].enderecoMac

    enderecoMAC = formataMAC(enderecoMAC)

    println("MAC Address: $enderecoMAC")
    val fkMaquinaLista = capturaRepo.buscarIdPorMAC(enderecoMAC)

    if (fkMaquinaLista.isNotEmpty()) {
        val fkMaquina = fkMaquinaLista[0]
        captura.setFkMaquinaCaptura(fkMaquina)
    } else {
        println("Erro: Nenhuma máquina encontrada para o endereço MAC $enderecoMAC")
        println("Adicionando máquina com o endereço MAC $enderecoMAC no banco de dados")
        capturaRepo.inserirMaquina(enderecoMAC)
        println("Máquina adicionada com sucesso.")
        detectaMaquina()
    }
}

fun capturaBandaLarga() {
    val dadosCaptura = looca.rede.grupoDeInterfaces.interfaces[5]

    val byteRecebidos = dadosCaptura.bytesRecebidos
    val byteEnviados = dadosCaptura.bytesEnviados

    val totalBytes = byteRecebidos + byteEnviados
    val taxaUsoBandaLarga = ((totalBytes / 60) * 8) / 1000000

    println(taxaUsoBandaLarga)

   captura.setDataHoraCaptura(pegaDataHoraCaptura())
   captura.setRegistro(taxaUsoBandaLarga)
   captura.setTemProblema(100)

}

fun capturaPacotesPerdidos(){

    val dadosPacotes = looca.rede.grupoDeInterfaces.interfaces[5]

    val pacotesEnviados = dadosPacotes.pacotesEnviados
    val pacotesRecebidos = dadosPacotes.pacotesRecebidos

    println(pacotesEnviados)
    println(pacotesRecebidos)


    var pacotesPerdidos = ((pacotesEnviados - pacotesRecebidos)/pacotesEnviados) * 100

    if (pacotesPerdidos < 0){ pacotesPerdidos = 0}

    captura.setDataHoraCaptura(pegaDataHoraCaptura())
    captura.setRegistro(pacotesPerdidos)
    

}

fun pegaDataHoraCaptura(): String {
    val format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    return LocalDateTime.now().format(format)
}
