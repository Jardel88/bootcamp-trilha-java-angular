<%@page import="com.pessoaweb.dao.PessoaDao"%>
<jsp:useBean id="p" class="com.pessoaweb.bean.Pessoa"></jsp:useBean>
<jsp:setProperty property="*" name="p"/>

<%
PessoaDao.deletarPessoa(p);
response.sendRedirect("viewpessoas.jsp");
%>