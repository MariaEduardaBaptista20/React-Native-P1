import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";

import { Button } from "../../components/buttons/index"
import { Foundation, Entypo, AntDesign, Ionicons   } from '@expo/vector-icons';


export const Login = () => {
  return (
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        placeholder="CPF ou E-mail"
        keyboardType="email-address"
/>
    <TextInput
            style={styles.input}
            onChangeText={()=>{}}
            placeholder="Senha"
            keyboardType="visible-password"
    />
    <Text style={styles.RecuperarSenha}>Recuperar senha</Text>
    <Button title={'Entrar'}  />
    <View style={styles.divOu}>
      <View style={styles.line}/>
      <Text style={styles.ou}>Ou</Text>
      <View style={styles.line}/>
    </View>
    <Button title={'Continuar com o Google'} priority={'secondary'}  ></ Button >
   
    <View style={styles.divOu}>
    <View style={styles.line}/>
    </View>
    <View style={styles.DivCadastro}>
      <Text style={styles.SemCadastro}>Não possui cadastro?</Text>
      <Text style={styles.FazerCadastro}>Criar uma conta</Text>
    </View>
    <Text style={styles.vantagens}>Vantagens de ser um cliente Ingressos.com</Text>
    <View style={styles.divInfos}>
      <View style={styles.infos}>
      <Foundation name="credit-card" size={20} color="purple" />
      <Text style={styles.infos}>Salvar Cartões</Text>
      </View>
      <View style={styles.infos}>
      <Entypo name="ticket" size={20} color="red" />
      <Text style={styles.infos}>Cancelar Pedidos</Text>
      </View>
      <View style={styles.infos}>
      <AntDesign name="star" size={20} color="yellow" />
      <Text style={styles.infos}>Favoritar Cinemas</Text>
      </View>
      <View style={styles.infos}>
      <Ionicons name="phone-portrait" size={20} color="blue" />
      <Text style={styles.infos}>Retirar pelo App</Text>
      </View>
    </View>
    </View>
)};
