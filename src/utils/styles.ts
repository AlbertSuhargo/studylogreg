import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    over: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'white',
    },
    container: {
        position: 'absolute',
        alignSelf: 'center',
        top: '10%',
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    textStyle2: {
        color: '#6439FF',
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
        marginBottom: 5,
        backgroundColor: '#6439FF',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    button2: {
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
    },
});

export default styles;
