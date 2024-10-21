import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

class CapturaRepositorio {

    lateinit var jdbcTemplate: JdbcTemplate

    fun configurar() {
        val datasource = BasicDataSource()
        datasource.driverClassName = "com.mysql.cj.jdbc.Driver"
        datasource.url = "jdbc:mysql://localhost:3306/logGuard?serverTimezone=America/Sao_Paulo"
        datasource.username = "root"
        datasource.password = "Senha123"

        jdbcTemplate = JdbcTemplate(datasource)
    }

    fun buscarIdPorMAC(enderecoMAC: String): List<Int> {
        return jdbcTemplate.queryForList(
            "SELECT idMaquina FROM maquina WHERE MACAdress = ?",
            Int::class.java,
            enderecoMAC
        )
    }

    // aqui a fk recurso é 4 porque esse a o id da captura de banda larga na tabela "recurso" no banco
    // já que esse código sempre vai pegar banda larga não tem problema a fk ficar chumbada
//    fun buscarParametroId( fkMaquina:Int): List<Int> {
//        return jdbcTemplate.queryForList(
//            "SELECT parametro FROM maquinaRecurso WHERE fkMaquinaRecurso = ? AND fkrecurso = 4;",
//            Int::class.java,
//            fkMaquina
//        )
//    }

    fun inserirCaptura(novaCaptura: Captura): Boolean{
        val qtdLinhasInseridas = jdbcTemplate.update(
            """
               INSERT INTO captura VALUES(default, ?, 4, 4, ?, ?);
            """,
            novaCaptura.fkMaquinaCaptura,
            novaCaptura.registro,
            novaCaptura.dtCriacaoCaptura,
//            novaCaptura.tem_problema,

        )
        return qtdLinhasInseridas > 0
    }









}