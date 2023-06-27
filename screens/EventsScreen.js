import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const EventsScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Função para carregar os eventos a partir de uma API ou outra fonte de dados
    const fetchEvents = async () => {
      try {
        // Realize a chamada à API para obter os eventos da data selecionada
        const response = await fetch(`https://api.example.com/events?date=${selectedDate}`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Erro ao obter os eventos:', error);
      }
    };

    if (selectedDate) {
      fetchEvents();
    }
  }, [selectedDate]);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <Text>Selecione uma data:</Text>
      {/* Componente de seleção de data, como DatePicker ou um conjunto de botões */}
      {/* Quando a data for selecionada, chame handleDateSelection com a data selecionada */}
      {/* Exemplo: <DatePicker onDateSelect={handleDateSelection} /> */}
    

      <View style={styles.buttonContainer}>
    <Button title="Voltar" onPress={() => navigation.goBack()} />
  </View>

      {events.length > 0 ? (
        events.map((event) => (
          <View key={event.id}>
            <Text>proximos jogos {event.name}</Text>
            <Text>Data: {event.date}</Text>
            {/* Outras informações do evento */}
          </View>
        ))
      ) : (
        <Text></Text>
      )}
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
export default EventsScreen;
