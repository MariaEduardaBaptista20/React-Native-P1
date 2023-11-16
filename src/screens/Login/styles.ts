import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  titulo: {
    color: '#fff'

  },
  divInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    backgroundColor: '#FFF',
    color: 'black',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
    width: 270
  },

  iconCadastro: {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 7,
    height: 50,
    marginTop: 28,

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
  RecuperarSenha: {
    color: '#375DDB',
    fontSize: 10,

  },
  DivCadastro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10
  },

  SemCadastro: {
    color: '#FFF',
    width: 100
  },
  FazerCadastro: {
    color: '#375DDB'
  },
  vantagens: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10
  },
  divInfos: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  infos: {
    width: 50,
    fontSize: 12,
    color: 'gray',
    alignItems: 'center',
    textAlign: 'center'
  },
  tituloLogin: {

    color: '#FFF',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'right',
    paddingRight: "28%"
  },
  senha: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    padding: 2
  }

});