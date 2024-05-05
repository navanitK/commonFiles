
@wire(adapterId, adapterConfig)
propertyOrFunction;


@api recordId;
@wire(getRecord, { recordId: "$recordId", fields: [ACCOUNT_NAME_FIELD] })
record;

import NAME_FIELD from "@salesforce/schema/Contact.Name";

//-----------------------------------------------------------------------------------

@wire(adapterId, adapterConfig)
func(data,error){
    //do stuff with data 
    //set the class properties in this function.

}


@wire(getRecord, { recordId: "$recordId", fields: ["Account.Name"] })
  wiredAccount({ error, data }) {
    if (data) {
      this.record = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.record = undefined;
    }
  }

  --------------------calling apex ------------------------------------

  import apexMethodName from "@salesforce/apex/namespace.classname.apexMethodReference";


  public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    
    public static List<Contact> getContactList() {
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WHERE Picture__c != null
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}

import apexMethodName from "@salesforce/apex/namespace.ContactController.getContactList";

/// waht is custom apex data type 

ContactController{

    wrapper {
        field 1
        field 2 
    }
}
//can also be written as 
Wrapper {
    field 1
    field 2
}

ContactController{

    Wrapper obj = new Wrapper();
}
------------------contuning -----------------------------------

import apexMethodName from '@salesforce/apex/namespace.classname.apexMethodReference';
@wire(apexMethodName, { apexMethodParams })
propertyOrFunction;



import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getContactList) 
    contacts;
}



---imperative call-------------------------------- 
async handleApexMethod() {
    try {
      this.records = await getApexMethod();
      this.error = undefined;
    } catch (error) {
      this.records = undefined;
      this.error = error;
    }
}

-------------------------referesh cache 
refreshApex() from @salesforce/apex. used on both apex @wire and imperative 
 // Notify LDS that you've changed the record outside its mechanisms
      // Await the Promise object returned by notifyRecordUpdateAvailable()
notifyRecordUpdateAvailable 
