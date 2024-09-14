import { View, Text, TextInput, Pressable } from 'react-native';
import * as React from 'react';
import styles from '../utils/styles';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'; // Import axios for API requests

const Login = ({ navigation }) => {

  const { control, handleSubmit } = useForm();

  // Handle login logic
  const handleLogin = async (data: any) => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/login', { // Android emulator uses 10.0.2.2 for localhost
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        navigation.navigate('Home');
      } else {
        console.warn('Login failed:', response.data.message);
      }
    } catch (error: any) {
      console.warn('Error logging in:', error.response ? error.response.data : error.message);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('Forgot Password');
  };

  return (
    <View style={styles.over}>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Login</Text>

        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
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
          rules={{ required: 'Password is required', minLength: { value: 3, message: 'Password should be at least 3 characters' } }}
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
