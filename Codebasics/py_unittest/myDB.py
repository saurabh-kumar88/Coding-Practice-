import mysql.connector
from mysql.connector import Error

class MyDB:
    def __init__(self):
        pass
        
    def Connect(self, host, database, user, password):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
        try:
            conn = mysql.connector.connect( host ,database ,user, password )
            if conn.is_connected():
                print ("Connected to MYSQL Database: {} ").format(database)
        except Error as e:
            print (e)



# class Cursor():
#     def execute(self, query):
#         if query == "select id from employee where name=John":
#             return 123
#         elif query == "select id from employee where name=Tom":
#             return 789
#         else:
#             return -1

#     def close(self):
#         pass



if __name__ == "__main__":
    data = MyDB()
    data.Connect( host="localhost", database="NewsAggregator",user= "root",password= "saw99"  )



