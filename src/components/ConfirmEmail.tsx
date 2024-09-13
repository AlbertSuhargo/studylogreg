import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';

const ConfirmEmail = ({ navigation }) => {
    const [code, setCode] = useState('');

    const handleConfirmEmail = () => {
        navigation.navigate('Home');
    };
    const handleResendCode = () => {
        //
    };

    return (
        <View style={styles.over}>
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Confirm Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Confirmation Code"
                    value={code}
                    onChangeText={setCode}
                />
                <Pressable onPress={handleConfirmEmail} style={styles.button}>
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Pressable onPress={handleResendCode} style={styles.button2}>
                    <Text style={styles.textStyle2}>Resend Code</Text>
                </Pressable>
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
            </View>
        </View>
    );
};

export default ConfirmEmail;
