import * as React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const Register = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();
  const password = watch('password');

  const handleRegister = () => {
    navigation.navigate('Confirm Email');
  };

  return (
    <View style={styles.over}>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Register</Text>
        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Username is required',
            minLength: { value: 3, message: 'Username should be at least 3 characters long' },
            maxLength: { value: 24, message: 'Username should be at most 24 characters long' },
          }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
              <TextInput
                style={[styles.input, { borderColor: error ? 'red' : '#ddd' }]}
                placeholder="Username"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ pattern: { value: EMAIL_REGEX, message: "Email is invalid" } }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: { value: 5, message: 'Password should be at least 5 characters long' },
          }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="repeat-password"
          rules={{
            validate: () => repeatPassword === password || 'Passwords do not match',
          }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Repeat Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            </>
          )}
        />

        <Pressable onPress={handleSubmit(handleRegister)} style={styles.button}>
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        <Text>Already have an account?
          <Text onPress={() => navigation.navigate('Login')} style={styles.link}> Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
