import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';

const ForgotPassword = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleForgotPassword = () => {
        navigation.navigate('Reset Password');
    };

    return (
        <View style={styles.over}>
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Forgot Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Pressable onPress={handleForgotPassword} style={styles.button}>
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
            </View>
        </View>
    );
};

export default ForgotPassword;
