class User:
    def __init__(self, fName, lName, age, isActive):
        self.fName = fName
        self.lName = lName
        self.age = age
        self.isActive = isActive

    def getFullName(self):
        return "fullName : " + str(self.fName) + " " + str(self.lName)


# inheritance

class Teacher(User):
    def __init__(self, fName, lName, age, isActive, subject):
        super().__init__(fName, lName, age, isActive)
        self.subject = subject
    
    # method overloading
    def getFullName(self):
        return "My full name is : " + str( (self.fName).upper() ) + " " + str( (self.lName).upper() )
    
    def getAge(self):
        return 'Age is : ' + str(self.age) 



if __name__ == "__main__":
    # obj = User("Billy", "butcher", 45, 78.12 )
    # print( obj.isActive )

    Sam = Teacher('Samuel','Jackson', 57,True,'python')
    #print( Sam.getFullName() )
    print( Sam.getAge() )   
        
    