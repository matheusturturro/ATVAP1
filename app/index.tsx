import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Form from '@/components/form';
import Userlist from '@/components/userlist';
import { Usuario } from './types';
import { labels } from './labels'; 

export default function Index() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const cadastrar = () => {
    if (!nome || !telefone) return;
    setUsuarios(prev => [...prev, { nome, telefone }]);
    setNome('');
    setTelefone('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{labels.tituloPrincipal}</Text>
      <Form
        nome={nome}
        telefone={telefone}
        setNome={setNome}
        setTelefone={setTelefone}
        onSubmit={cadastrar}
      />
      <Userlist usuarios={usuarios} />
    </View>
  );
} 