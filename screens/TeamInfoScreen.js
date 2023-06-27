import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const TeamInfoScreen = ({ navigation }) => {
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    // Função para carregar as informações do time a partir de uma API ou outra fonte de dados
    const fetchTeamInfo = async () => {
      try {
        // Realize a chamada à API para obter as informações do time
        const response = await fetch('https://api.example.com/team/1');
        const data = await response.json();
        setTeamInfo(data);
      } catch (error) {
        console.error('Erro ao obter informações do time:', error);
      }
    };

    fetchTeamInfo();
  }, []);

  return (
    <View>
      {teamInfo ? (
        <View>
          <Text>Nome do Time: {teamInfo.name}</Text>
          <Text>País: {teamInfo.country}</Text>
          <Text>Vitórias: {teamInfo.wins}</Text>
          <Text>Derrotas: {teamInfo.losses}</Text>
          {/* Outras informações do time */}
        </View>
      ) : (
        <Text>Carregando informações do time...</Text>
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
export default TeamInfoScreen;
