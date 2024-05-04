<template>
    <c-bool disabled={computedValue}></c-bool>
</template>

//for making something false , u have to use Computed value {computedValue}
//this is because disabled evaluates to true 
//also disabled = "false" evaluates to true 
//hence use computed value  ,disabled = {computedValue} ,
//that then evaluates correctly to false when computed value = false.
