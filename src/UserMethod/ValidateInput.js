// Password
  export  const validatePassword = (rule, value, returnValue) => {
    if (!value) {
      returnValue('Please enter information!'); 
    } else if (value.length > 5 && value.length <25) { 
      returnValue();
    } else {
      returnValue('Password must be between 6 and 25 characters');
 
    }
  };

// Name
 export const validateName = (rule, value,returnValue) => {
    if (!value) {
      returnValue('Please enter information!'); 
    }
    else if (!isNaN(value)) {
      returnValue('Cannot be a number'); // Không được là số
    } 
    else{
      returnValue()
    }
  }; 

// Phone 
  export const validatePhone = (rule, value,returnValue) => {
    const valiPhone=/^0[0-9]{9}$/
    if (!value) {
      returnValue('Please enter information!'); 
    }
    else if (valiPhone.test(value)) {
      returnValue(); 
    } 
    else{
      returnValue('Please enter your phone number in the correct syntax!')
    }
  };

// Email
  export const validateEmail = (rule, value,returnValue) => {
    const valiEmail=/^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/
    if (!value) {
      returnValue('Please enter information!'); 
    }
    else if (valiEmail.test(value)) {
      returnValue(); 
    } 
    else{
      returnValue('Please enter your phone number in the correct syntax!')
    }
  };

// Role
  export const validateRole = (rule, value,returnValue) => {
    if (!value) {
      returnValue('Please enter information!'); 
    }
    else{
      returnValue()
    }
  };

// Address
  export const validateAddress = (rule, value,returnValue) => {
    if (!value) {
      returnValue('Please enter information!'); 
    }
    else{
      returnValue()
    }
  };

// Loacation
  export const validateLocation = (rule, value,returnValue) => {
    if (!value) {
      returnValue('Please enter information!'); 
    }
    else{
      returnValue()
    }
  };