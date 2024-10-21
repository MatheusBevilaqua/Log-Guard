package app

import Captura
import CapturaRepositorio
import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

val capturaRepo = CapturaRepositorio()
val captura = Captura()
val looca = Looca()

open class Main {
    companion object {
        @JvmStatic fun main(args: Array<String>) {
            capturaRepo.configurar()
            obtemIDMaquina()

            while (true){
                capturaBandaLarga()
//        verificaLog()
                capturaRepo.inserirCaptura(captura)
                println("Dados Novos Inseridos")
                Thread.sleep(5000)
            }

        }

        fun obtemIDMaquina(){
            val enderecoMAC = looca.rede.grupoDeInterfaces.interfaces[3].enderecoMac
            println(enderecoMAC)
            val fkMaquinaLista = capturaRepo.buscarIdPorMAC(enderecoMAC)
            val fkMaquina = fkMaquinaLista[0]
            captura.setFkMaquinaCaptura(fkMaquina)
        }

        fun capturaBandaLarga(){
            val dadosCaptura = looca.rede.grupoDeInterfaces.interfaces[3]

            val byteRecebidos = dadosCaptura.bytesRecebidos
            val byteEnviados = dadosCaptura.bytesEnviados

            val usoBandaLarga = (((byteRecebidos + byteEnviados) / 60) * 8) / 1000000


            println("Taxa de uso de banda larga:${usoBandaLarga.toDouble()} Mpbs")

            captura.setDataHoraCaptura(pegaDataHoraCaptura())
            captura.setRegistro(usoBandaLarga.toDouble())
        }

//fun verificaLog(){
//
//    val parametroLat = capturaRepo.buscarParametroId(captura.fkMaquinaCaptura)[0]
//    captura.setTemProblema(parametroLat)
//}

        fun pegaDataHoraCaptura(): String{
            val format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
            val dataHoraCap = LocalDateTime.now().format(format)
            return dataHoraCap
        }
    }
}