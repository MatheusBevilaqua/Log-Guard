class Captura {
    var fkMaquinaCaptura:Int = 0
        private set
    var registro: Double = 0.0
        private set
    var tem_problema: Boolean = false
        private set
    var dtCriacaoCaptura: String = ""
        private set

    fun setFkMaquinaCaptura(fkMaquina: Int){
        fkMaquinaCaptura = fkMaquina
    }

    fun setRegistro (registroRede: Long){
        registro = registroRede.toDouble()
    }

    fun setTemProblema (parametro: Int){
        if (registro < parametro){
            tem_problema = true
        } else{
            tem_problema = false
        }
    }

    fun setDataHoraCaptura (data: String){
        dtCriacaoCaptura = data
    }
}
