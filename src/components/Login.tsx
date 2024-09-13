import { View, Text, TextInput, Pressable } from 'react-native';
import * as React from 'react';
import styles from '../utils/styles';
import { useForm, Controller } from 'react-hook-form';

const Login = ({ navigation }) => {

  const handleLogin = (data) => {
    console.log(data);
    navigation.navigate('Home');
  };
  const handleForgotPassword = () => {
    navigation.navigate('Forgot Password');
  };

  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.over}>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Login</Text>
        <Controller
          control={control}
          name="username"
          rules={{ required: 'Username is required' }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
            <>
              {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
              <TextInput
                style={[styles.input, { borderColor: error ? 'red' : '#ddd' }]}
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
              />
            </>
          }
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: 'Password is required', minLength: {value: 3, message: 'Password should be minimum 3 characters'} }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
            <>
              {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
              <TextInput
                style={[styles.input, { borderColor: error ? 'red' : '#ddd' }]}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            </>
          }
        />

        <Pressable onPress={handleSubmit(handleLogin)} style={styles.button}>
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        <Pressable onPress={handleForgotPassword} style={styles.button2}>
          <Text style={styles.textStyle2}>Forgot Password?</Text>
        </Pressable>
        <Text>Don't have an account?
          <Text onPress={() => navigation.navigate('Register')} style={styles.link}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
