import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../app/styles';
import { Usuario } from '../app/types';
import { labels } from '../app/labels';

type Props = {
  usuarios: Usuario[];
};

export default function Userlist({ usuarios }: Props) {
  return (
    <View>
      <View style={styles.listaHeader}>
      <Text style={styles.headerText}>{labels.headerNome}</Text>
      <Text style={styles.headerText}>{labels.headerTelefone}</Text>
      </View>

      <View style={styles.listaContainer}>
        <ScrollView>
          {usuarios.map((usuario, index) => (
            <View key={index} style={styles.listaItem}>
              <Text>{usuario.nome}</Text>
              <Text>{usuario.telefone}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}