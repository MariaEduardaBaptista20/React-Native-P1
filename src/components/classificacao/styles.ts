import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    titulo: {
        color: '#fff',
        fontWeight: 'bold'

    },
    cidade: {
        color: "#375DDB",
        marginLeft: 50
    },
    cor: {
        color: '#375DDB'
    },
    filmes: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        margin: 5,


    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: 2

    },
    cabecalho: {
        height: 100,
        marginBottom: 0
    },
    tudo: {
        backgroundColor: '#333',
        height: '100%',

    },
    icons: {
        height: 15,
        width: 15
    },
    filmesInfos: {
        height: 250,
        width: 110,
        paddingBottom: 90,
        borderRadius: 5,

        flexDirection: 'column'
    },
    infosTomatoes: {
        backgroundColor: 'FFF',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tituloFilme: {
        height: 'auto',
        width: 110,
        flexWrap: 'wrap',
        color: '#FFF',

    },
    porcentagemCor: {
        color: '#FFF'
    },
    clacificacao1: {
        position: 'absolute',
        left: 5,
        top: 5,
        color: 'black',
        fontSize: 17,
        borderRadius: 5,
        fontWeight: 'bold',
        width: 30,
        height: 30,
        textAlign: 'center',
        paddingTop: 2,
        backgroundColor: 'green'
    },
    clacificacao2: {
        position: 'absolute',
        left: 5,
        top: 5,
        color: 'Black',
        fontSize: 17,
        borderRadius: 5,
        fontWeight: 'bold',
        width: 30,
        height: 30,
        textAlign: 'center',
        paddingTop: 2,
        backgroundColor: 'yellow'
    },
    clacificacao3: {
        position: 'absolute',
        left: 5,
        top: 5,
        color: 'black',
        fontSize: 17,
        borderRadius: 5,
        fontWeight: 'bold',
        width: 30,
        height: 30,
        textAlign: 'center',
        paddingTop: 2,
        backgroundColor: 'orange'
    },
    centralizaFilmes: {
        justifyContent: 'space-around'
    },
    divButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#202020'

    },
    aba1: {
        fontSize: 20,
        color: "orange",
        borderBottomColor: "orange",
        paddingHorizontal: 10
    },
    aba2: {
        fontSize: 20,
        color: "#375DDB",
        paddingHorizontal: 10

    },


});