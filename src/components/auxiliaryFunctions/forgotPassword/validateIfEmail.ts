/*

    The validateIfEmail function checks if the email given by the user is an actual email

*/

const validateIfEmail = (currentEmail: string):boolean => {
  const regexValue:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  return regexValue.test(String(currentEmail).toLowerCase());
};

export default validateIfEmail;
