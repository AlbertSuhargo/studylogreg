import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';

const ResetPassword = ({ navigation }) => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.over}>
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Reset Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your confirmation code"
                    value={code}
                    onChangeText={setCode}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <Pressable onPress={handleResetPassword} style={styles.button}>
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
            </View>
        </View>
    );
};

export default ResetPassword;
