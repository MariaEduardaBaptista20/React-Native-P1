import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    titulo:{
        color: '#fff'

    },
    cidade:{
        color: "blue",
        marginLeft: 50
    },
    cor:{
        color: 'blue'
    },
    filmes:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        margin: 5
    },
    image:{
        height: '360%',
        width: '32%',
        marginBottom: 10,
        borderRadius: 5
    },
    cabecalho:{
        height: 100,
        marginBottom: 10
    }
});