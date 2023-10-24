package connectivity;
import java.sql.*;
public class CRUDE {
	
	 public static void main(String args[]) throws Exception {
	        Class.forName("org.postgresql.Driver");
	        String url = "jdbc:postgresql://localhost:5432/CRUDE";
	        String user = "postgres";
	         String password = "divum";
	        Connection conn = DriverManager.getConnection(url, user, password);
	        Statement s=conn.createStatement();
	        ResultSet x=s.executeQuery("Select * from records");
	        if(x.next()){
	            do{
	                System.out.println(x.getString(1)+" "+x.getString(2)+" ");
	            }while(x.next());
	        }
	    }

}
