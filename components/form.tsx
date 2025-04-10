import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { styles } from '../app/styles';
import { labels } from '../app/labels';

type Props = {
  nome: string;
  telefone: string;
  setNome: (nome: string) => void;
  setTelefone: (telefone: string) => void;
  onSubmit: () => void;
};

export default function Form({ nome, telefone, setNome, setTelefone, onSubmit }: Props) {
  const [telefoneError, setTelefoneError] = useState(false);

  const handleTelefoneChange = (text: string) => {
    // Remove qualquer caractere que não seja número
    const apenasNumeros = text.replace(/[^0-9]/g, '');
    
    // Atualiza o estado de erro
    setTelefoneError(text !== apenasNumeros);
    
    // Atualiza o valor do telefone apenas com números
    setTelefone(apenasNumeros);
  };

  return (
    <View style={formStyles.formContainer}>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{labels.nome}</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder={labels.placeholderNome}
        />
      </View>

      <View style={styles.inputContainer}>
      <Text style={[styles.label, telefoneError && styles.labelError]}>{labels.telefone}</Text>
        <TextInput
          style={[
            styles.input,
            telefoneError && styles.inputError
          ]}
          value={telefone}
          onChangeText={handleTelefoneChange}
          placeholder={labels.placeholderTelefone}
          keyboardType="phone-pad"
        />
      </View>
      {telefoneError && (<Text style={styles.errorText}>{labels.erroTelefone}</Text>)}

      <TouchableOpacity 
        style={formStyles.button}
        onPress={onSubmit}
      >
        <Text style={formStyles.buttonText}>{labels.botaoCadastrar}</Text>
      </TouchableOpacity>
    </View>
  );
}

const formStyles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#e6e6ff',
    padding: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
  }
});