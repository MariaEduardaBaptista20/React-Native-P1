import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


export const HeaderFilmes = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Filmes</Text>

    <Text style={styles.cidade}>Teresópolis</Text>
    <Ionicons name="ios-person-circle-outline" size={24} color="blue" />
    <FontAwesome5 name="search" size={24} color="blue" />
  </View>
)};
