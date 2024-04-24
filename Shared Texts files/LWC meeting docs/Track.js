
var a = {firstName = 'pam' , lastName = 'K'};

a.firstName = 'nav';  // no 
//if u want mutation to fire , use @Track

a = {firstName = 'Nav' , lastName = 'K'} ; // mutation

a = {..., firstName = 'Nav'}; // mutation

@track
var arr = [1,2];

arr.push(3); // NO

//printed state => arr = 1,2,3 

arr[0] = 'x'; // NO

arr = [1,2,'x'] //yes
====================================
Object extension
@track 
var obj = {firstName = 'pam' , lastName = 'K'};

obj.middleName = 'papa'; //extending the object by adding another property.

//print : pam, papa, K

obj.middleName = 'mummy'; // No 

obj.firsName = 'Nav' // Mutation

//solution to track middle name ??
--------------------------------------------------
@track 
var obj = {firstName = 'pam' , lastName = 'K'};

solution 1: //clone into another object, need to change HTML code
@track
var newObj = {
	...,
	middleName = 'papa'
}

solution 2: //clone into itself , no need to change HTML code
obj = {
	...,
	middleName = 'papa'
}