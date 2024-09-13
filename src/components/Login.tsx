import { View, Text, TextInput, Pressable } from 'react-native';
import * as React from 'react';
import styles from '../utils/styles';
import { useState } from 'react';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //
  };

  return (
    <View style={styles.over}>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        <Text>Don't have an account?
          <Text onPress={() => navigation.navigate('Register')} style={styles.link}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
