import REGEX from 'constants/regex';
import ERROR_MESSAGE from 'constants/errorMsg';

/**
 *
 * @param {object} rules need validate
 * @param {object} object data nedd validate
 */
const Validators = (objectVal: Object, validate: Object) => {
  const error = {};

  const keys = Object.keys(objectVal);

  for (let i = 0, { length } = keys; i < length; i += 1) {
    const key = keys[i];
    const rules = validate[key];
    const value = objectVal[key];
    let errorMsg = '';

    for (let j = 0; j < rules.length; j += 1) {
      switch (rules[j]) {
        case 'required':
          if (value === '' || value === null || value === undefined) {
            errorMsg = ERROR_MESSAGE.REQUIRED;
          }
          break;
        case 'userName':
          if (!REGEX.USER_NAME.test(value)) {
            errorMsg = ERROR_MESSAGE.USERNAME;
          }
          break;
        case 'password':
          if (!REGEX.PASSWORD.test(value)) {
            errorMsg = ERROR_MESSAGE.PASSWORD;
          }
          break;
        default:
          break;
      }
      if (errorMsg) {
        error[key] = errorMsg;
      }
    }
  }
  return error;
};

export default Validators;
