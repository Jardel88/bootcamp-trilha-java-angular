<%@page import="com.pessoaweb.dao.PessoaDao"%>
<jsp:useBean id="p" class="com.pessoaweb.bean.Pessoa"></jsp:useBean>
<jsp:setProperty property="*" name="p"/>

<%
int i = PessoaDao.salvarPessoa(p);
if(i > 0){
	response.sendRedirect("addpessoa-success.jsp");
} else {
	response.sendRedirect("addpessoa-error.jsp");
}
%>