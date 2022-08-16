

// Val Telephone2
function validateTelephone2(executionContext) {

   var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; // get formContext
   
   var pattern = /[^0-9,\+']/ig;
   var fieldName = 'telephone2';
   var currentValue = formContext.getAttribute(fieldName).getValue(); 
   var currentValueLength = currentValue.length;
   if (pattern.test(currentValue) || currentValueLength < 13 ) {
     formContext.getControl(fieldName).setNotification('Invalid Phone format.\n The standard format is +254700123456');
   } else {
     formContext.getControl(fieldName).clearNotification();
   }

  }

 //Val Telephone1
 
  function validateTelephone1(executionContext) {

    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; // get formContext
    
    var pattern = /[^0-9,\+]/ig;
    var fieldName = 'telephone1';
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentValueLength = currentValue.length;
    if (pattern.test(currentValue) || currentValueLength < 13) {
      formContext.getControl(fieldName).setNotification('Invalid Phone format.The standard format is +254700123456');
    } else {
      formContext.getControl(fieldName).clearNotification();
    }
 
   }
 
   // Val Telephone 3
   function validateTelephone3(executionContext) {

    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; // get formContext
    
    var pattern = /[^0-9,\+]/ig;
    var fieldName = 'telephone3';
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentValueLength = currentValue.length;
    if (pattern.test(currentValue) || currentValueLength < 13) {
      formContext.getControl(fieldName).setNotification('Invalid Phone format.The standard format is +254700123456');
    } else {
      formContext.getControl(fieldName).clearNotification();
    }
 
   }

   // Val KRA PIN
   function validateKRAPIN(executionContext) {

    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; // get formContext
    
    var pattern = /[^0-9,\A-Z,\a-z]/ig;
    var fieldName = 'ecl_krapin';
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentValueLength = currentValue.length;
    if (pattern.test(currentValue) || currentValueLength < 11 || currentValueLength > 11) {
      formContext.getControl(fieldName).setNotification('Invalid PIN . KRA PIN contains only numbers and letters. The length of the value cannot be more or less than 11 characters');
    } else {
      formContext.getControl(fieldName).clearNotification();
    }
 
   }

   //KRA A010245821H
   var txt = "A010245821H"
   var len = txt.length
   console.log(len)


   //Validate Date Of Birth

   function onChangeDOB(executionContext){
    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; 
     var fieldName = 'ecl_dateofbirth';
     var birthDateValue = formContext.getAttribute(fieldName).getValue();
     var today = new Date();
     var validMinDate = new Date(
       today.getFullYear() - 18,
       today.getMonth(),
       today.getDate(),
       today.getHours(),
       today.getMinutes()
     );

     
     if(birthDateValue > validMinDate){
       formContext.getControl(fieldName).setNotification("Minimum Age must be 18 years. Choose correct Birthdate");
     }
     else {
       formContext.getControl(fieldName).clearNotification();
     }
   }