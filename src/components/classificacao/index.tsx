import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


interface ClassificacaoProps {

    porcentagem1: string;
    porcentagem2: string;
    title: string;
    clacificacao: string;

    cor1: string;
    cor2: string;
    image: Image;

}

export const Filmes = ({ title, porcentagem1, porcentagem2, clacificacao, image, cor1, cor2 }: ClassificacaoProps) => {
    return <View style={styles.filmesInfos}>
        <Image source={image} style={styles.image} />
        <Text style={styles.clacificacao3}>{clacificacao}</Text>
        <View style={styles.infosTomatoes}>
            <Entypo name="clapperboard" size={15} color={cor1} />
            <Text style={styles.porcentagemCor}>{porcentagem1}</Text>
            <MaterialCommunityIcons name="popcorn" size={15} color={cor2} />
            <Text style={styles.porcentagemCor}>{porcentagem2}</Text>
        </View>
        <Text style={styles.tituloFilme}>{title}</Text>
    </View>
}