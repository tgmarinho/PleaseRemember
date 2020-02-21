import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from '@react-navigation/compat';
import Background from '../../components/Background';
import Notification from '../../components/Notification';
import {Container, Title, List} from './styles';
// import api from '~/services/api';
import {Text} from 'react-native';

function ListNotifications({isFocused}) {
  const [notifications, setNotifications] = useState([
    1,
    2,
    3,
    4,
    1,
    1,
    1,
    2,
    2,
  ]);

  async function loadAppointments() {
    // const response = await api.get('/appointments');
    // setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  // async function handleCancel(id) {
  //   const response = await api.delete(`appointments/${id}`);
  //   setAppointments(
  //     appointments.map(appointment =>
  //       appointment.id === id
  //         ? {
  //             ...appointment,
  //             canceled_at: response.data.canceled_at,
  //           }
  //         : appointment
  //     )
  //   );
  // }

  return (
    <Background>
      <Container>
        <Title>Notificações</Title>

        <List
          data={notifications}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Notification onCancel={() => {}} />}
        />
      </Container>
    </Background>
  );
}

ListNotifications.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(ListNotifications);
