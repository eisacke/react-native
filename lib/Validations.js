class Validations {
  static required(value) {
    return [undefined, null, ''].includes(value) ? 'This field is required' : undefined;
  }

  static maxValue = max => value => {
    return value && value > max && `Please enter a number lower than ${ max }` || undefined;
  }

  static minValue = min => value => {
    return value && value < min && `Please enter a number higher than ${ min }` || undefined;
  }

  static number = value => {
    return value && isNaN(Number(value)) ? 'Please enter a number' : undefined;
  }

  static wholeNumber = value => {
    return value && !/(^0$)|(^[1-9]\d{0,8}$)/i.test(value)
      ? 'Please enter a whole number'
      : undefined;
  }

  static email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined;
  }

  static mobile = value => {
    return value && !/^(\+?44|0)7\d{9}$|^(\+?4?0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/i.test(value)
      ? 'Please enter a valid UK mobile number'
      : undefined;
  }

  static maxLength = max => value => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined;
  }

  static minLength = min => value => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined;
  }

}

export default Validations;
