import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#202020',
        paddingTop: 60,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 20,
        alignItems: 'center'
    },
    titulo: {
        color: '#fff',
        fontSize: 18

    },
    cidade: {
        color: "#375DDB",

        fontWeight: 'bold',
        fontSize: 19
    },
    cor: {
        color: '#375DDB'
    },
    abas: {
        flexDirection: 'row',
        backgroundColor: '#202020'
    },
    tudo: {

    }
});