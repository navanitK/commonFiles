class Circle    { area() }
class Triangle  { area() }
class Square    { area() }


main {
    if(input = circle ){
        Circle thisCircle = new Circle
        circle.area();
    }else if(input = triangle){
        Triangle.area();
    }else if(input = square){
        Square.area();
    }
}

----------------------------------------------------------
interface shapes{
    area();
    volume();// interface segrigation
}

class circle implements shapes  { 
    area(){

    } 
    volume();//there is no meaning to this for 2D shapes 

}

class triangle implements shapes  { 
    area(){
        
    } 
}

class Sphere implements shapes  { 
    area(){
        
    } 

    volume(){

    }
}


main {
    shapes currentShape = new circle();
    currentShape.area();

    currentShape = new triangle();
    currentShape.area();
}
-------------------------------------------------

interface 3DShapes{    
    volume();
}

class Sphere implements shapes, 3DShapes { 
    area(){
        
    } 

    volume(){

    }
}

//----------------------Enterprice design patterns ---------------------------

Controller{
    AccountSelector.getAccountsWithStatus('New');
} 
Handler 
Helper - Service //example accountService, contactService 

Selector{
    //This class only has methods that perform Query and return result 
    List<SObject> getAccountsWithStatus(String inputStatus);
    
}

AccountSelector implements Selector{
    public List<Account> getAccountsWithStatus(String inputStatus){
        return [
            Select id, 
            name 
            From Account
            Where status =: inputStatus
        ]
    }
}


WOLI Triggger {

    //update WO on status change 
    WO.status = 'X';
    udpate WO; 
}

Order Triggger {

    //update WO on status change 
    WO.status = 'X';
    udpate WO; 
}

//new field mandatory on WO 
change is needed in both 

///////////////////////////////////////////


better design is to use Service

Class WOService{
    updateWO(Workorder inputWO){
        try{
            inputWO.newMandatoryField = 'something';
        update inputWO;
        }catch(e){
            //do something with e 
        }
        
    }

}


Order Triggger {

    WOService.updateWO();
}

Unit Of Work Pattern

//Only use this for doing DML 

Class UOW{
    update (List<SObject> sobjectRecords){
        Database.saveResult sr = database.update (sobjectRecords, false);
        if(sr.error == true){
            //do ssome thing with error data;
        }
    }
}

Class WOService{
    updateWO(Workorder inputWO){
        inputWO.newMandatoryField = 'something';
        UOW.update(new List<SObject> {inputWO});       
        
    }

}


Class SObject {

}

Class Account implements SObject{

}

Class Contact implements SObject{
    
}

SObject a = new Account();


