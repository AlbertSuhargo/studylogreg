import * as React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';
import { useForm, Controller } from 'react-hook-form';

const ConfirmEmail = ({ navigation }) => {

    const handleConfirmEmail = () => {
        navigation.navigate('Home');
    };
    const handleResendCode = () => {
        //
    };

    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.over}>
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Confirm Email</Text>
                <Controller
                    control={control}
                    name="code"
                    rules={{ required: 'Code is required' }}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                        <>
                            {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Your Confirmation Code"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        </>
                    }
                />

                <Pressable onPress={handleSubmit(handleConfirmEmail)} style={styles.button}>
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Pressable onPress={handleSubmit(handleResendCode)} style={styles.button2}>
                    <Text style={styles.textStyle2}>Resend Code</Text>
                </Pressable>
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
            </View>
        </View>
    );
};

export default ConfirmEmail;
