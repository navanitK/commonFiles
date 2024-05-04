cmp3.js{
    _message;

    connectedCallBack(){
        window.addEventListener('red', this.receiveMessage);
    }
    

    receiveMessage = (event) => {
        this._message = event.data
    }
}

-----------------------sending data ------------------------------

this.dispatchEvent(new CustomEvent("next"));                                            let myEvent = new CustomEvent("next");
                                                                                        this.dispatchEvent(myEvent);


                                                                                        const selectedEvent = new CustomEvent("selected", { detail: this.contact.Id });
                                                                                        this.dispatchEvent(selectedEvent);


                                                                                        


                                                                                          const selectedEvent = new CustomEvent("selected", { contactsArray: [
                                                                                            {name; 'nav'},
                                                                                            {name: 'pam'}
                                                                                            ] });
                                                                                          this.dispatchEvent(selectedEvent);

---------------------gettingData----------------------------------

contactSelected(event) {
    const contactId = event.detail;
    console.log(contactId);
  }
  contactsArray[0].name;
-----------------------------------------LMS-----------------------------------

<?xml version="1.0" encoding="UTF-8"?>
<LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>SampleMessageChannel</masterLabel>
    <isExposed>true</isExposed>
    <description>This is a sample Lightning Message Channel.</description>
    <lightningMessageFields>
        <fieldName>recordId</fieldName>
        <description>This is the record Id that changed</description>
    </lightningMessageFields>
    <lightningMessageFields>
        <fieldName>recordData</fieldName>
        <description>The current data representing the record that changed</description>
    </lightningMessageFields>
</LightningMessageChannel>