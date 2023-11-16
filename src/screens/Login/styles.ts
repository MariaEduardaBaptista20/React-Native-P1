import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    titulo:{
        color: '#fff'

    },
    
    input: {
        backgroundColor:'#FFF',
        color: 'black',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    divOu: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
        marginHorizontal: 10,
      },
      ou: {
        fontSize: 16,
   
        color: 'gray'
      },
      RecuperarSenha:{
        color: 'blue',
        fontSize: 10,
        
      },
      DivCadastro:{
       flexDirection: 'row',
       justifyContent: 'space-between'
      },

      SemCadastro:{
        color: '#FFF',
        width: 70
      },
      FazerCadastro:{
        color: 'blue'
      },
      vantagens:{
        color: 'gray',
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 10
      },
      divInfos:{
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      infos:{
        width: 50,
        fontSize: 12,
        color: 'gray',
        alignItems: 'center',
        textAlign: 'center'
      }

});