import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderField } from '../form';
import Validations from '../../lib/Validations';

import { Text, View, Button } from 'react-native';


const LoginForm = ({ errors, handleSubmit, pristine, submitting }) => {
  return (
    <View>
      <Text>Login</Text>
      {errors.global && <Text>{errors.global}</Text>}
      <View>
        <Field name="email" component={RenderField} type="text" placeholder="Email" label="Email" validate={Validations.required} />
        <Field name="password" component={RenderField} type="password" placeholder="Password" label="Password" validate={Validations.required} />
        <Button
          title="Login"
          onPress={handleSubmit}
          disabled={pristine || submitting}
        />
      </View>
    </View>
  );
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
