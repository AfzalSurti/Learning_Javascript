import java.util.Scanner;
public class take_input {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your name:");
        String name=sc.nextLine();
        System.out.println("enter your age");
        int age=sc.nextInt();
        System.out.println("enter your mark");
        float mark=sc.nextFloat();
        System.out.println(age+" year old "+name+" scored "+mark +" marks.");

    }
}