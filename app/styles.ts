import { StyleSheet, Dimensions } from "react-native"; //para poder usar porcentagens

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '90%', 
        alignSelf: 'center',
        padding: 20,
        marginTop: 50,
    },
    titulo: {
        fontSize: 22,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        flex: 1,
        height: 30,
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 10, 
    },
    inputError: {
        borderColor: 'red',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5,
    },
    label: {
        width: 70,
        fontSize: 16,
        fontWeight: 500,
    },
    labelError: {
        color: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 80, 
        marginTop: -5,
    },
    listaHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
    headerText: {
        fontWeight: 'bold',
    },
    listaContainer: {
        maxHeight: 200, 
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 5,
    },
    listaItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    cadastroTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    }
})
