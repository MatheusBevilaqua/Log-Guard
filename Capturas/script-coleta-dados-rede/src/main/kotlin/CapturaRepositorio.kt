import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

class CapturaRepositorio {

    lateinit var jdbcTemplate: JdbcTemplate

    fun configurar() {
        val datasource = BasicDataSource()
        datasource.driverClassName = "com.mysql.cj.jdbc.Driver"
        datasource.url = "jdbc:mysql://localhost:3306/logGuard?serverTimezone=America/Sao_Paulo"
        datasource.username = "root"
        datasource.password = "1234"

        jdbcTemplate = JdbcTemplate(datasource)
    }

    fun buscarIdPorMAC(enderecoMAC: String): List<Int> {
        return jdbcTemplate.queryForList(
            "SELECT idMaquina FROM maquina WHERE MACAdress = ?",
            Int::class.java,
            enderecoMAC
        )
    }

    fun inserirMaquina(enderecoMAC: String): Boolean {
        val qtdLinhasInseridas = jdbcTemplate.update(
            """
               INSERT INTO maquina (MACAdress) VALUES (?);
            """,
            enderecoMAC
        )
        return qtdLinhasInseridas > 0
    }

    fun inserirCaptura(novaCaptura: Captura): Boolean {
        println("Inserindo captura: ${novaCaptura.fkMaquinaCaptura}, ${novaCaptura.registro}, ${novaCaptura.tem_problema}, ${novaCaptura.dtCriacaoCaptura}")

        val qtdLinhasInseridas = jdbcTemplate.update(
            """
               INSERT INTO captura VALUES(default, ?, 4, 4, ?, ?, ?);
            """,
            novaCaptura.fkMaquinaCaptura,
            novaCaptura.registro,
            novaCaptura.tem_problema,
            novaCaptura.dtCriacaoCaptura
        )
        return qtdLinhasInseridas > 0
    }

    fun inserirCapturaPacotes(novaCaptura: Captura): Boolean {
        println("Inserindo captura: ${novaCaptura.fkMaquinaCaptura}, ${novaCaptura.registro}, ${novaCaptura.tem_problema}, ${novaCaptura.dtCriacaoCaptura}")

        val qtdLinhasInseridas = jdbcTemplate.update(
            """
               INSERT INTO captura VALUES(default, ?, 5, 5, ?, ?, ?);
            """,
            novaCaptura.fkMaquinaCaptura,
            novaCaptura.registro,
            novaCaptura.tem_problema,
            novaCaptura.dtCriacaoCaptura
        )
        return qtdLinhasInseridas > 0
    }
}
