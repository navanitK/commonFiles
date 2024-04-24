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


<!-- parent.html -->
<template>
  <c-bool show={computedValue}></c-bool>
</template>

Use a JavaScript getter in parent.js to return the value of {computedValue}.