<%@page import="com.pessoaweb.dao.PessoaDao"%>
<jsp:useBean id="p" class="com.pessoaweb.bean.Pessoa"></jsp:useBean>
<jsp:setProperty property="*" name="p"/>

<%
int i = PessoaDao.updatePessoa(p);
response.sendRedirect("viewpessoas.jsp");
%>