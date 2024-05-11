Singleton Design pattern in Apex

class ABC {
    static Boolean yolo = true;
    Boolean  LocalVar ; 
    ABC(){
        LocalVar = true;
    }

}

ABC object = new ABC();
object.LocalVar = false;

//--------------------Singleton Creation pattern 

class ABC {
    
    Boolean  LocalVar1 ; 
    Boolean  LocalVar2 ; 
    Boolean  LocalVar3 ; 

    ABC(){
        LocalVar = true;
    }

    private static ABC instanceOfABC ;

    public getInstanceOfABC(){
        if(instanceOfABC == null){
            instanceOfABC =  new ABC.instanceOfABC
        } else {
            //return existing instance 
            return ABC.instanceOfABC;
        }    
        
    }

}

r1 = new ABC();
r2 = new ABC();

WOLITrigger {

Sobject record1 = order update ;
Sobject record2 = WorkOrder update;

List<Sobject> recordsToUpdate = new List<Sobject>();
recordsToUpdate.add(record1);
recordsToUpdate.add(record2);

UOW.udpate(recordsToUpdate);
}

WOLITrigger {
    Sobject record2 = WorkOrder update;
    UOW.udpate(record2);
}

AccountTrigger{
    Sobject record1 = order update ;
    UOW.udpate(record1);
}

//runs two times 

UOW{

    static UOW instanceOfUOW; 

    getUOW(){
        //if an instance exists already, return that instance 
        // if not make new instance 
    }

}


WOLITrigger {
    Sobject record2 = WorkOrder update;
    instanceOfUOW = UOW.getUOW();
    instanceOfUOW.addToUpdateRecords(record2);
}

AccountTrigger{
    Sobject record1 = order update ;
    instanceOfUOW = UOW.getUOW();
    instanceOfUOW.addToUpdateRecords(record1);
}





