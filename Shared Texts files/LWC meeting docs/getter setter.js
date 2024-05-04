todoApp.html

<template>
  <div class="listing">
    <c-todo-item item-name="Milk"></c-todo-item>
    <c-todo-item item-name="Bread"></c-todo-item>
  </div>
  <div>
	{!myItem}
  </div>
  <c-todo-item item-name="Apple"></c-todo-item>
</template>

JS{
	myItem = this.template.querySelector('c-todo-item');

	newVariable = myItem.class;
}



=================================================
getter setter 
child.html
<template>
  
  <div>
	{!fullName}
  </div>
  
</template>


JS{
	
	_firstName;
	_lastName;	
	
	
	get String fullName(){ //do not pass Type, viz.. String
		return this._firstName + this._lastName;
	}
	@api
	set fullName(String input1, String input2){//do not pass Type, viz.. String
		this._firstName = input1 ;
		this._lastName = input2;
	}
	
	/*
	@api
	set fullName(input){
		this._firstName = input.input1 ;
		this._lastName = input.input2;
	}
	*/
}


ManagedPKG__Product__c
--------------------------------------------------
parentLWC.html

<template>
  
  <div>
	<c-child fullName="{input1 = 'pam' ,input2 = 'k' }"/>
  </div>
  
</template>

============================================
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_disabled



-----------------------------------------------------------------------------

JS{
	
	_firstName;
	_lastName;	
	_birthDate;
	
	get String fullName(){ //do not pass Type, viz.. String
		return this._firstName + this._lastName;
	}
	@api
	set fullName(String input1, String input2){//do not pass Type, viz.. String
		this._firstName = input1 ;
		this._lastName = input2;
		let fname = this._firstName + this._lastName;
		if(this._birthDate === undefined){
			console.log(his name is + fname +  and his age is );
		}
		else{
			printAgeAndName();
		}
	}

	get Integer age(){
		return _birthDate;
	}

	set age(date incomingBdate){
		let _age =  today - incomingBdate;
		if(this._firstName === undefined){
			console.log(his age is + _age);
		}else{
			printAgeAndName();
		}
		
	}

	printAgeAndName(){
		console.log(his name is + _firstName + _lastName +  and his age is + this._birthDate );
	}
	
}


ManagedPKG__Product__c
--------------------------------------------------
parentLWC.html

<template>
  
  <div>
	<c-child fullName="{input1 = 'pam' ,input2 = 'k' }" age="{1993}" />
  </div>
  
</template>