import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const PlayerInfoScreen = ({ navigation }) => {
  const [playerInfo, setPlayerInfo] = useState(null);

  useEffect(() => {
    // Função para carregar as informações do jogador a partir de uma API ou outra fonte de dados
    const fetchPlayerInfo = async () => {
      try {
        // Realize a chamada à API para obter as informações do jogador
        const response = await fetch('https://api.example.com/player/1');
        const data = await response.json();
        setPlayerInfo(data);
      } catch (error) {
        console.error('Erro ao obter informações do jogador:', error);
      }
    };

    fetchPlayerInfo();
  }, []);

  return (
    <View>
      {playerInfo ? (
        <View>
          <Text>Nome do Jogador: {playerInfo.name}</Text>
          <Text>Posição: {playerInfo.position}</Text>
          <Text>Idade: {playerInfo.age}</Text>
          <Text>Gols: {playerInfo.goals}</Text>
          {/* Outras informações do jogador */}
        </View>
      ) : (
        <Text>Carregando informações do jogador...</Text>
      )}
      <View style={styles.buttonContainer}>
    <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View> 
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolut',
    bottom: -450, // Ajuste a posição vertical conforme necessário
    alignSelf: 'center', // Centraliza horizontalmente
  },
};
export default PlayerInfoScreen;
