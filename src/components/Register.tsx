import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleRegister = () => {
    navigation.navigate('Confirm Email');
  };

  return (
    <View style={styles.over}>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Repeat Password "
          value={passwordRepeat}
          onChangeText={setPasswordRepeat}
          secureTextEntry
        />
        <Pressable onPress={handleRegister} style={styles.button}>
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
