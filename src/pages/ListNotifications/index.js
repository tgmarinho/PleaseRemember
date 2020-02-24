import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from '@react-navigation/compat';
import Background from '../../components/Background';
import Notification from '../../components/Notification';
import {Container, Title, List} from './styles';
import {useAsyncStorage} from '@react-native-community/async-storage';

// import api from '~/services/api';
import {Text} from 'react-native';

function ListNotifications({isFocused}) {
  const {getItem, setItem, mergeItem, removeItem} = useAsyncStorage(
    '@PLEASEREMEMBER',
  );

  const [notifications, setNotifications] = useState([]);

  // const readItemFromStorage = async () => {
  //   const item = await getItem();
  //   setNotifications(item);
  //   console.tron.log(item);
  //   // console.tron.log(value);
  // };

  async function loadNotifications() {
    const item = await getItem();
    const parsed = await JSON.parse(item);
    setNotifications(parsed);
    console.tron.log('loadNotifications:', notifications);
  }

  useEffect(() => {
    if (isFocused) {
      loadNotifications();
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
          renderItem={({item}) => (
            <Notification data={item} onCancel={() => {}} />
          )}
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
