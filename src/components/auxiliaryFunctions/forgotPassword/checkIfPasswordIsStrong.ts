/**
    The checkIfPasswordIsStrong function checks if the requirements for the new user's password are fulfilled
 */

const checkIfPasswordIsStrong = (newPasswd: string): boolean => {
  const capitalLetterRegExp:RegExp = /[A-Z]/;
  const smallLetterRegExp:RegExp = /[a-z]/;

  return newPasswd.length > 8 && capitalLetterRegExp.test(newPasswd) && smallLetterRegExp.test(newPasswd);
};
export default checkIfPasswordIsStrong;
