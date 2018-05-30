import React from 'react';
import { TextInput, View, Text } from 'react-native';

const RenderField = ({ input, label, type, placeholder, meta: { touched, error, warning, invalid } }) => (
  <View className={`p-form-group ${touched && invalid ? 'is-invalid' : ''}`}>
    {label && <Text>{label}</Text>}
    <TextInput
      {...input}
      placeholder={placeholder}
      type={type}
      autoCapitalize='none'
    />
    {touched && ((error && <Text className="p-error">{error}</Text>) || (warning && <Text>{warning}</Text>))}
  </View>
);

export { RenderField };
