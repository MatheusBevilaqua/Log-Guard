import com.github.britooo.looca.api.core.Looca
import kotlin.concurrent.thread

fun main(){

    while (true) {
        val looca = Looca()

        val teste = looca.sistema

        val rede = looca.rede
        val mem = looca.memoria
        val sys = looca.sistema
        val proc = looca.processador
        val temp = looca.temperatura
        val usbGrp = looca.dispositivosUsbGrupo
        val discGrp = looca.grupoDeDiscos
        val janGrp = looca.grupoDeJanelas
        val servGrp = looca.grupoDeServicos
        val procGrp = looca.grupoDeProcessos

        print("\n------ REDE ------- \n")
        print("Parâmetros de rede")
        print(rede.parametros)
        print("Grupo")
        print(rede.grupoDeInterfaces.interfaces.size)
        print("\n------ SISTEMA ------- \n")
        print(sys)
        print("\n------ MEMÓRIA ------- \n")
        print(mem)

        print("\n------ TEMPERATURA ------- \n")
        print(temp)

        //print("\n------ PROCESSOS ------- \n")
        //print(proc)
        //print(proc.id)
        //print(proc.identificador, "\n")
        //print(proc.uso, "\n")
        //print(proc.nome, "\n")
        //print(proc.identificador, "\n")
        //print(proc.frequencia, "\n")
        //print(proc.microarquitetura, "\n")
        //print(proc.numeroCpusFisicas, "\n")
        //print(proc.numeroCpusLogicas, "\n")
        //print(proc.numeroPacotesFisicos, "\n")

        print("\n****** GRUPOS ******  \n")

        print("\n------ GRUPOS USB ------- \n")
        print(usbGrp)
        //print("Dispositivos usb \n")
        //print(usbGrp.dispositivosUsb, "\n")
        //print("Total dispositivos usb \n")
        //print(usbGrp.totalDispositvosUsb, "\n")
        //print("Dispositivos usb conectados \n")
        //print(usbGrp.dispositivosUsbConectados, "\n")
        //print("Total de dispositivos usb conectados \n")
        //print(usbGrp.totalDispositvosUsbConectados, "\n")


        print("\n------ GRUPOS DE DISCO------- \n")
        print(discGrp)
        //print(discGrp.discos, "\n")
        //print(discGrp.volumes, "\n")
        //print(discGrp.tamanhoTotal, "\n")
        //print(discGrp.quantidadeDeDiscos, "\n")
        //print(discGrp.quantidadeDeVolumes, "\n")

        print("\n------ GRUPOS DE JANELAS------- \n")
        print(janGrp)
        //print(janGrp.janelas, "\n")
        //print(janGrp.totalJanelas, "\n")
        //print(janGrp.janelasVisiveis, "\n")
        //print(janGrp.totalJanelasVisiveis, "\n")

        print("\n------ GRUPOS DE SERVIÇO ------- \n")
        print(servGrp)
        //print(servGrp.servicos, "\n")
        //print(servGrp.servicosAtivos, "\n")
        //print(servGrp.totalDeServicos, "\n")
        //print(servGrp.servicosInativos, "\n")
        //print(servGrp.totalServicosAtivos, "\n")
        //print(servGrp.totalServicosInativos, "\n")


        //print("\n------ GRUPOS DE PROCESSO ------- \n")
        //print(procGrp)
        //print(procGrp.processos, "\n")
        //print(procGrp.totalThreads, "\n")
        //print(procGrp.totalProcessos, "\n")
        Thread.sleep(20000)
    }
}