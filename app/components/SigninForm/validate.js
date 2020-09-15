const validate = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  const mobile = /^[7-9][0-9]{9}$/;
  if (!values.get('mobile')) {
    errors.mobile = 'Required';
  } else if (!mobile.test(values.get('mobile'))) {
    errors.mobile = 'Please enter a valid Mobile number';
  }
  return errors;
};

export default validate;
