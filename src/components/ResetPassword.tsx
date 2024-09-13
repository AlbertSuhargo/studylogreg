import * as React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../utils/styles';
import { useForm, Controller } from 'react-hook-form';

const ResetPassword = ({ navigation }) => {

    const handleResetPassword = () => {
        navigation.navigate('Home');
    };

    const { control, handleSubmit } = useForm();


    return (
        <View style={styles.over}>
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Reset Password</Text>
                <Controller
                    control={control}
                    name="code"
                    rules={{ required: 'Code is required' }}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                        <>
                            {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your confirmation code"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        </>
                    }
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: 'Password is required' }}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                        <>
                            {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your new password"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        </>
                    }
                />

                <Pressable onPress={handleSubmit(handleResetPassword)} style={styles.button}>
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
            </View>
        </View>
    );
};

export default ResetPassword;
