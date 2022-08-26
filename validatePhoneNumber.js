


function validateTelephone2(executionContext) {

   var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page;

   var pattern = /[^0-9,\+]/ig;
   var fieldName = '';
   var currentValue = formContext.getAttribute(fieldName).getValue(); 
   var currentValueLength = currentValue.length;
   if (pattern.test(currentValue) || currentValueLength < 13 ) {
     formContext.getControl(fieldName).setNotification('Invalid Phone format.\n The standard format is +254700123456');
   } else {
     formContext.getControl(fieldName).clearNotification();
   }

  }

  function validateTelephone1(executionContext) {

    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; 
    
    var pattern = /[^0-9,\+]/ig;
    var fieldName = '';
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentValueLength = currentValue.length;
    if (pattern.test(currentValue) || currentValueLength < 13) {
      formContext.getControl(fieldName).setNotification('Invalid Phone format.The standard format is +254700123456');
    } else {
      formContext.getControl(fieldName).clearNotification();
    }
 
   }
 
   function validateTelephone3(executionContext) {

    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; 
    
    var pattern = /[^0-9,\+]/ig;
    var fieldName = '';
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentValueLength = currentValue.length;
    if (pattern.test(currentValue) || currentValueLength < 13) {
      formContext.getControl(fieldName).setNotification('Invalid Phone format.The standard format is +254700123456');
    } else {
      formContext.getControl(fieldName).clearNotification();
    }
 
   }


   function validateKRAPIN(executionContext) {

    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; // get formContext
    
    // Allowed chars in KRA field . Numbers, Caps & Small Letters
    var pattern = /[^0-9,\A-Z,\a-z]/ig;
    var fieldName = '';
    var currentValue = formContext.getAttribute(fieldName).getValue(); 
    var currentValueLength = currentValue.length;
    if (pattern.test(currentValue) || currentValueLength < 11 || currentValueLength > 11) {
      formContext.getControl(fieldName).setNotification('Invalid PIN . KRA PIN contains only numbers and letters. The length of the value cannot be more or less than 11 characters');
    } else {
      formContext.getControl(fieldName).clearNotification();
    }
 
   }


   //Validate Date Of Birth

   function onChangeDOB(executionContext){
    var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; 
     var fieldName = '';
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

   // Name field
   function nameField(executionContext) {
   var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; 
   var pattern = /[^A-Z,\a-z]/ig;
   var fieldName = '';
   var currentValue = formContext.getAttribute(fieldName).getValue(); 
   if (pattern.test(currentValue)) {
     formContext.getControl(fieldName).setNotification('The field name contains letters only . ');
   } else {
     formContext.getControl(fieldName).clearNotification();
   }

  }

  function memberNo(executionContext) {

   var formContext = executionContext ? executionContext.getFormContext() : Xrm.Page; 
   var pattern = /[^0-9]/ig;
   var fieldName = '';
   var currentValue = formContext.getAttribute(fieldName).getValue(); 
   if (pattern.test(currentValue)) {
     formContext.getControl(fieldName).setNotification('Member number contains numerical characters only');
   } else {
     formContext.getControl(fieldName).clearNotification();
   }

  }