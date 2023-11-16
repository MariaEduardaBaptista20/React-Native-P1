import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { HeaderFilmes } from "../../../components/header/index";

export const EmCartaz = () => {
  return (
  
    <View>
        <View style={styles.cabecalho}>
      <HeaderFilmes/>
      </View>
    <View style={styles.filmes}>
    
      <Image source={require('../../../assets/cartaz/177644c1-0445-45ae-b931-cbd82bc58140.webp')} style={styles.image}/>
      <Image source={require('../../../assets/cartaz/196231e1-ff6d-4a18-ae14-f4a539e5e630.webp')} style={styles.image}/>
      <Image source={require('../../../assets/cartaz/2f3a4169-b3c2-4f64-93c7-7a621b2957c0.webp')} style={styles.image}/>
      <Image source={require('../../../assets/cartaz/7b421849-024d-40d4-a34b-76c15270265f.webp')} style={styles.image}/>
      <Image source={require('../../../assets/cartaz/7dd56e58-99bf-49d8-9a95-eb815ed7e86b.webp')} style={styles.image}/>
      <Image source={require('../../../assets/cartaz/87ca2e1f-7cad-4b86-81b9-2fc27d22c466.webp')} style={styles.image}/>
      <Image source={require('../../../assets/cartaz/ce5d50ca-1876-4d76-b154-1fb6dad57b11.webp')} style={styles.image}/>
    </View>
    </View>
)};