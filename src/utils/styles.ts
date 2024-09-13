import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    over: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    container: {
        position: 'absolute',
        alignSelf: 'center',
        top: '20%',
        width: '70%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightblue',
        elevation: 3,
        padding: 20,
        flex: 1,
    },
    headerStyle: {
        fontFamily: 'Roboto',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 60,
    },
    textStyle: {
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
    },
    button: {
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#6439FF',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
});

export default styles;
