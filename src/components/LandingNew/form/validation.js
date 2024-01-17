/**
 * This is a simplified logic.
 * Consider using `import isEmail from 'validator/lib/isEmail'` from
 * https://github.com/validatorjs/validator.js/blob/7376945b4ce028b65955ae57b8fccbbf3fe58467/src/lib/isEmail.js
 * for a more robust version.
 */
function isEmail(string) {
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(string);
  }
  
  export function email(value) {
    return value && !isEmail(value.trim()) ? 'Invalid email' : null;
  }
  
  function isDirty(value) {
    return value || value === 0;
  }
  
  export function required(requiredFields, values) {
    return requiredFields.reduce(
      (fields, field) => ({
        ...fields,
        ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
      }),
      {},
    );
  }

  export function isMobile(value) {
    // Regular expression for a valid mobile number (assuming 10-digit numbers)
    const re = /^[0-9]{10}$/;
    return re.test(value);
  }
  
  export function mobile(value) {
    return value && !isMobile(value.trim()) ? 'Invalid mobile number' : null;
  }
  

  // check the value is numeri or not
  export function isNumericOnly(value) {
    // Regular expression for a string containing only numeric characters
    const re = /^[0-9]+$/;
    return re.test(value);
  }
  
  export function numericCheck(value) {
    return value && !isNumericOnly(value.trim()) ? null: 'Invalid input, Cannot be numeric' ;
  }
  
