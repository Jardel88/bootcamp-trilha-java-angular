<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Editar pessoa</title>
</head>
<body>
	<%@page import="com.pessoaweb.bean.Pessoa, com.pessoaweb.dao.PessoaDao" %>
	
	<%
		String id = request.getParameter("id");
		Pessoa pessoa = PessoaDao.getRegistroById(Integer.parseInt(id));
	%>
	
	<h1>Editar Pessoa</h1>
	<form action="editpessoa.jsp" method="post">
		<input type="hidden" name="id" value="<%=pessoa.getId()%>"/>
		<table>
			<tr>
				<td>Nome: </td>
				<td><input type="text" name="nome" value="<%=pessoa.getNome()%>"/></td>
			</tr>
			<tr>
				<td>E-mail: </td>
				<td><input type="email" name="email" value="<%=pessoa.getEmail()%>"/></td>
			</tr>
			<tr>
				<td colspan="2"><input type="submit" value="Editar Pessoa"></td>
			</tr>
		</table>
	</form>
</body>
</html>