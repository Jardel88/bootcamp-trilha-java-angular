package com.pessoaweb.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.pessoaweb.bean.Pessoa;

public class PessoaDao {
	
	public static Connection getConnection() {
		Connection con = null;
		
		try {
			Class.forName("org.postgresql.Driver");
			con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/pessoaweb", "postgres", "root");
		} catch (Exception e) {
			System.out.println(e);
		}
		return con;
	}
	
	public static int deletarPessoa(Pessoa p) {
		int status = 0;
		
		try {
			Connection con = getConnection();
			PreparedStatement ps = (PreparedStatement) con.prepareStatement("DELETE FROM pessoa WHERE id=?");
			ps.setInt(1, p.getId());
			status = ps.executeUpdate();
		}catch (Exception e) {
			System.out.println(e);
		}
		return status;
	}
	
	public static int salvarPessoa(Pessoa p) {
		int status = 0;
		
		try {
			Connection con = getConnection();
			PreparedStatement ps = (PreparedStatement) con.prepareStatement("INSERT INTO pessoa (nome, email) VALUES (?, ?)");
			ps.setString(1, p.getNome());
			ps.setString(2, p.getEmail());
			status = ps.executeUpdate();
		}catch (Exception e) {
			System.out.println(e);
		}
		return status;
	}
	
	
	public static Pessoa getRegistroById(int id) {
		Pessoa pessoa = null;
		
		try {
			Connection con = getConnection();
			PreparedStatement ps = (PreparedStatement) con.prepareStatement("SELECT * FROM pessoa WHERE id=?");
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				pessoa = new Pessoa();
				pessoa.setId(rs.getInt("id"));
				pessoa.setNome(rs.getString("nome"));
				pessoa.setEmail(rs.getString("email"));
			}
		}catch (Exception e) {
			System.out.println(e);
		}
		return pessoa;
	}
	
	public static int updatePessoa(Pessoa p) {
		int status = 0;
		
		try {
			Connection con = getConnection();
			PreparedStatement ps = (PreparedStatement) con.prepareStatement("UPDATE pessoa SET nome=?, email=? WHERE id=?");
			
			ps.setString(1, p.getNome());
			ps.setString(2, p.getEmail());
			ps.setInt(3, p.getId());
			status = ps.executeUpdate();
		}catch (Exception e) {
			System.out.println(e);
		}
		return status;
	}
	
	public static List<Pessoa> getAllPessoas(){
		List<Pessoa> list = new ArrayList<Pessoa>();
		
		try {
			Connection con = getConnection();
			PreparedStatement ps = con.prepareStatement("SELECT * FROM pessoa");
			
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Pessoa pessoa = new Pessoa();
				pessoa.setId(rs.getInt("id"));
				pessoa.setNome(rs.getString("nome"));
				pessoa.setEmail(rs.getString("email"));
				list.add(pessoa);
			}
		}catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}
	
}
