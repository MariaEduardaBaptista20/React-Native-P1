import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { HeaderFilmes } from "../../../components/header/index";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Filmes } from '../../../components/classificacao'

export const EmCartaz = () => {
  return (

    <View style={styles.tudo}>
      <View style={styles.cabecalho}>
        <HeaderFilmes />
      </View>
      <View style={styles.divButton}>
        <Text style={styles.aba1}>Em Cartaz</Text>
        <Text style={styles.aba2}>Em Breve</Text>
      </View>
      <ScrollView>
        <View style={styles.filmes}>

          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/177644c1-0445-45ae-b931-cbd82bc58140.webp')} style={styles.image} />
            <Text style={styles.clacificacao3}>14</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="red" />
              <Text style={styles.porcentagemCor}>63%</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="gray" />
              <Text style={styles.porcentagemCor}>--</Text>
            </View>
            <Text style={styles.tituloFilme}>Jogos Vorazes – A Cantiga Dos Pássaros E Das Serpentes</Text>
          </View>
          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/196231e1-ff6d-4a18-ae14-f4a539e5e630.webp')} style={styles.image} />
            <Text style={styles.clacificacao2} >12</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="gray" />
              <Text style={styles.porcentagemCor}>--</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="gray" />
              <Text style={styles.porcentagemCor}>--</Text>
            </View>
            <Text style={styles.tituloFilme}>Mussum, O Filmis</Text>
          </View>
          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/2f3a4169-b3c2-4f64-93c7-7a621b2957c0.webp')} style={styles.image} />
            <Text style={styles.clacificacao1}>L</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="red" />
              <Text style={styles.porcentagemCor}>20%</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="red" />
              <Text style={styles.porcentagemCor}>20%</Text>
            </View>
            <Text style={styles.tituloFilme}>Trolls 3 – Juntos Novamente</Text>
          </View>
          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/7b421849-024d-40d4-a34b-76c15270265f.webp')} style={styles.image} />
            <Text style={styles.clacificacao3}>14</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="red" />
              <Text style={styles.porcentagemCor}>30%</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="red" />
              <Text style={styles.porcentagemCor}>87%</Text>
            </View>
            <Text style={styles.tituloFilme}>Five Nights at Freddy's - O Pesadelo Sem Fim</Text>
          </View>
          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/7dd56e58-99bf-49d8-9a95-eb815ed7e86b.webp')} style={styles.image} />
            <Text style={styles.clacificacao1}>L</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="gray" />
              <Text style={styles.porcentagemCor}>--</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="gray" />
              <Text style={styles.porcentagemCor}>--</Text>
            </View>
            <Text style={styles.tituloFilme}>Nina: A Heroína dos Sete Mares</Text>
          </View>
          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/87ca2e1f-7cad-4b86-81b9-2fc27d22c466.webp')} style={styles.image} />
            <Text style={styles.clacificacao3}>14</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="red" />
              <Text style={styles.porcentagemCor}>61%</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="red" />
              <Text style={styles.porcentagemCor}>48%</Text>
            </View>
            <Text style={styles.tituloFilme}>Não Abra!</Text>
          </View>
          <View style={styles.filmesInfos}>
            <Image source={require('../../../assets/cartaz/ce5d50ca-1876-4d76-b154-1fb6dad57b11.webp')} style={styles.image} />
            <Text style={styles.clacificacao2}>12</Text>
            <View style={styles.infosTomatoes}>
              <Entypo name="clapperboard" size={15} color="red" />
              <Text style={styles.porcentagemCor}>62%</Text>
              <MaterialCommunityIcons name="popcorn" size={15} color="red" />
              <Text style={styles.porcentagemCor}>84%</Text>
            </View>
            <Text style={styles.tituloFilme}>As Marvels</Text>
          </View>

          {/* <Filmes title="As Marvels" image={require('../../../assets/cartaz/177644c1-0445-45ae-b931-cbd82bc58140.webp')} porcentagem1="63%" porcentagem2="--" clacificacao="14" cor1='red' cor2='gray'/> 
        <Filmes title="As Marvels" image={require('../../../assets/cartaz/196231e1-ff6d-4a18-ae14-f4a539e5e630.webp')} porcentagem1="--" porcentagem2="--" clacificacao="12" cor1='gray' cor2='gray'/> 
        <Filmes title="As Marvels" image={require('../../../assets/cartaz/2f3a4169-b3c2-4f64-93c7-7a621b2957c0.webp')} porcentagem1="20%" porcentagem2="20%" clacificacao="L" cor1='red' cor2='red'/> 
        <Filmes title="As Marvels" image={require('../../../assets/cartaz/7b421849-024d-40d4-a34b-76c15270265f.webp')} porcentagem1="30%" porcentagem2="87%" clacificacao="14" cor1='red' cor2='red'/> 
        <Filmes title="As Marvels" image={require('../../../assets/cartaz/7dd56e58-99bf-49d8-9a95-eb815ed7e86b.webp')} porcentagem1="--" porcentagem2="--" clacificacao="L" cor1='gray' cor2='gray'/> 
        <Filmes title="As Marvels" image={require('../../../assets/cartaz/87ca2e1f-7cad-4b86-81b9-2fc27d22c466.webp')} porcentagem1="61%" porcentagem2="48%" clacificacao="14" cor1='red' cor2='red'/> 
        <Filmes title="As Marvels" image={require('../../../assets/cartaz/ce5d50ca-1876-4d76-b154-1fb6dad57b11.webp')} porcentagem1="62%" porcentagem2="84%" clacificacao="12" cor1='red' cor2='red'/>  */}






        </View>
      </ScrollView>
    </View>
  )
};