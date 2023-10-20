<h1>Crud JSP</h1>
<p>Versão Tomcat utilizada: 8.5</p>
<br>
<br>
<p>Tabela e inserts</p>
<p>CREATE TABLE pessoa (
 id SERIAL PRIMARY KEY,
 nome VARCHAR(60),
 email VARCHAR(60)
);

INSERT INTO pessoa (nome, email) VALUES
('José', 'jose@gmail.com'),
('Ana', 'ana@gmail.com'),
('Maria', 'maria@gmail.com');</p>