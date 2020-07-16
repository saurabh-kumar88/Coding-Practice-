/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package advance2;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

import java.time.format.DateTimeFormatter;
import java.time.ZoneId;

public class DateAndTime
{
	public static void main(String[] args) {
	
       ////local date
       //LocalDate local_date = LocalDate.now();
       //System.out.println("Current date : " + local_date);
       
       ////local time
       //LocalTime local_time = LocalTime.now();
       //System.out.println("Current Time : " + local_time);
        
       ////local LocalDateTime
       //LocalDateTime local_date_time = LocalDateTime.now();
       //System.out.println("Current date and time : " + local_date_time);
       
       
       // format date time
       String format1 = "dd-MM-yyy HH:mm:ss";
       String format2 = "yyyy-MM-dd";
       String format3 = "dd-MMM-yyyy";
       String format4 = "E, MMM dd yyyy";
       

          // time formats
       String timeFormat1 = "hh:mm:ss"; //12 hour format
       String timeFormat2 = "HH:mm:ss"; //24 hour format
       String timeFormat3 = "hh:mm:ss a";// AM or PM

       
       LocalDateTime myDateObj = LocalDateTime.now();
    //   DateTimeFormatter myDateFormt = DateTimeFormatter.ofPattern(format1);
    //   DateTimeFormatter myDateFormt = DateTimeFormatter.ofPattern(format2);
    //   DateTimeFormatter myDateFormt = DateTimeFormatter.ofPattern(format3);
    //   DateTimeFormatter myDateFormt = DateTimeFormatter.ofPattern(format4);
      
       DateTimeFormatter myDateFormt = DateTimeFormatter.ofPattern(timeFormat3);  
      
       String formattedDateTime  = myDateObj.format(myDateFormt);
       
       System.out.println("Formatted date : " + formattedDateTime);
       
	    // ___________ set time zone __________________
    
    ZoneId zone1 = ZoneId.of("Canada/Central");
    ZoneId zone2 = ZoneId.of("Asia/Kolkata");
    ZoneId zone3 = ZoneId.of("Australia/Canberra");
    
    LocalDateTime indian_local_time = LocalDateTime.now(zone3);
    
    System.out.println("Current IST : " + indian_local_time);
    
    // formatted IST time 
    
    String ISTformat = "hh:mm:ss a";
    DateTimeFormatter IST_Obj = DateTimeFormatter.ofPattern(ISTformat);
    
    String IST_DateTime = indian_local_time.format(IST_Obj);
    
    System.out.println("Indian local time : " + IST_DateTime);

    
	       
	       
		
	}
}
