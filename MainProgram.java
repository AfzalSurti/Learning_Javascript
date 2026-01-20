// jdbc with transaction management, prepared statement, callable statement example

import java.sql.*;

public class MainProgram{

    String url="jdbc:mysql:://localhost/StudentDB";
    String User="root";
    String Password="password123";
    public static void main(String[] args){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con=DriverManager.getConnection(url,User,Password)){
                con.setAutoCommit(false);
                createStudentTable(con);
                insertStudentAndUpdateTotal(con,1,"Afzal",10,67,78,89);
                insertStudentAndUpdateTotal(con,2,"John",11,56,78,90);
                displayAll(con);
                con.commit();
                System.out.println("Transaction Committed Successfully");
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    
}

static void createStudentTable(Connection con) throws SQLException{
    Stringg sql="Create table if not exists Student("+
                "ExamNo int primary key,"+
                "Name varchar(50),"+
                "DeptNo int,"+
                "Mark1 int,"+
                "Mark2 int,"+
                "Mark3 int,"+
                "Total int,"+
                "Percentage float)";

                try(Statement stmt=con.createStatement()){
                    stmt.executeUpdate(sql);
                    System.out.println("Student Table Created Successfully");
                }
}

static void insertStudentAndUpdateTotal(Connection con,int exam_no,Strin g Name,int dept_no,int m1,int m2,int m3) throws SQLException{
    String insertsql="insert into Student (ExamNo,Name,DeptNo,Mark1,Mark2,Mark3) values(?,?,?,?,?,?)";
    try(PreparedStatement ps=con.prepareStatement(insertsql)){
        ps.setInt(1,exam_no);
        ps.setString(2,Name);
        ps.setInt(3,dept_no);
        ps.setInt(4,m1);    
        ps.setInt(5,m2);
        ps.setInt(6,m3);
        ps.executreUpdate();
        System.out.println("Inserted Student: "+Name);
    }

    int total;
    double percentage;

    String callsp="{call calc_total_percent(?,?,?,?,?)}";

    try(CallableStatement cs=con.prepareCall(callsp)){
        cs.setInt(1,m1);
        cs.setInt(2,m2);
        cs.setInt(3,m3);
        cs.registerOutParameter(4,Types.INTEGER);
        cs.registerOutParameter(5,Types.DOUBLE);
        cs.execute(); // can i write here executeQuery() insted of execute()? - ans - yes
        total=cs.getInt(4);
        percentage=cs.getDouble(5);
    }

    String Updatesql="update student set total=? percentage=? where ExamNo=?";
    try(PreparedStatement ps2=con.prepareStatement(Updatesql)){
        ps2.setInt(1,total);
        ps2.setDouble(2,percentage);
        ps2.setInt(3,exam_no);
        ps2.executeUpdate();
        System.out.println("Updated Total and Percentage for Student: "+Name);
    }


}
 static void displayAll(Connection con) throws SQLException{
    String sql="Select * from Student";
    try(Statement stmt=con.createStatement();
        ResultSet rs=stmt.executeQuery(sql)){
            System.out.println("ExamNo\tName\tDeptNo\tMark1\tMark2\tMark3\tTotal\tPercentage");
            while(rs.next()){
                System.out.println(rs.getInt("ExamNo")+"\t"+
                                   rs.getString("Name")+"\t"+
                                   rs.getInt("DeptNo")+"\t"+
                                   rs.getInt("Mark1")+"\t"+
                                   rs.getInt("Mark2")+"\t"+
                                   rs.getInt("Mark3")+"\t"+
                                   rs.getInt("Total")+"\t"+
                                   rs.getDouble("Percentage"));
            }
    }
 }
