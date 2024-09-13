import * as React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';
import { useForm, Controller } from 'react-hook-form';

const ForgotPassword = ({ navigation }) => {

    const handleForgotPassword = () => {
        navigation.navigate('Reset Password');
    };
    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.over}>
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Reset Password</Text>
                <Controller
                    control={control}
                    name="username"
                    rules={{ required: 'Username is required' }}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your username"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        </>
                    )}
                />

                <Pressable onPress={handleSubmit(handleForgotPassword)} style={styles.button}>
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
            </View>
        </View>
    );
};

export default ForgotPassword;
