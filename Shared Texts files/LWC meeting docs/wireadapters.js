
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