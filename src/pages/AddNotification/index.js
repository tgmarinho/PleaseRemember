import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {showMessage, hideMessage} from 'react-native-flash-message';
Icon.loadFont();
import {withNavigationFocus} from '@react-navigation/compat';
import NotifyService from '../../services/NotifyService';
import Header from '../../components/Header';
import {Picker, Text, View, StyleSheet, Platform} from 'react-native';
import Select from '../../components/Select';
import SelectItem from '../../components/Select/styles';
import {
  Container,
  Separator,
  Form,
  FormInput,
  FormInputBig,
  SubmitButton,
} from './styles';

function AddNotification({isFocused}) {
  const smallTextRef = useRef();
  const bigTextRef = useRef();
  const timeRef = useRef();
  const [title, setTitle] = useState('');
  const [smallText, setSmallText] = useState('');
  const [bigText, setBigText] = useState('');
  const [time, setTime] = useState('');
  const [value, setValue] = useState([]);
  const {getItem, setItem, mergeItem, removeItem} = useAsyncStorage(
    '@PLEASEREMEMBER',
  );

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
    console.tron.log(item);
    // console.tron.log(value);
  };

  useEffect(() => {
    if (isFocused) {
      setSmallText('');
      setBigText('');
      setTime('');
      setTitle('');
    }

    // removeItem();
    readItemFromStorage();
  }, []);

  async function handleSubmit() {
    try {
      showMessage({
        message: 'Notificação criada com sucesso!',
        type: 'success',
      });
      let oldValues = await getItem();
      console.tron.log(oldValues);
      // oldValues !== null ? setItem(JSON.stringify([{title, bigText, time, smallText}]))

      // validate()

      // remove alfa
      let timeToCalc = time.replace(/\D/g, '');
      let dayHourMonthYearWeek = time.replace(/\d/g, '');

      // if (Platform.OS !== 'ios') {
      try {
        const n = new NotifyService();
        n.scheduleNotif();
      } catch (e) {
        console.tron.log('deuu eroo', e);
      }

      // }

      const newValues = {
        id: new Date().getTime(),
        title,
        bigText,
        time,
        smallText,
        active: true,
        timeToCalc,
      };

      setItem(
        oldValues !== null
          ? JSON.stringify([...JSON.parse(oldValues), newValues])
          : JSON.stringify([]),
      );
    } catch (e) {
      showMessage({
        message: 'Ops! Falha na criação da Notificação!',
        type: 'error',
      });
    }
  }

  return (
    <Background>
      <Container>
        <Header />

        <Form>
          <FormInput
            icon="title"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe Título"
            returnKeyType="next"
            onSubmitEditing={() => smallTextRef.current.focus()}
            value={title}
            onChangeText={setTitle}
          />

          <FormInput
            icon="create"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Texto pequeno"
            ref={smallTextRef}
            returnKeyType="next"
            onSubmitEditing={() => bigTextRef.current.focus()}
            value={smallText}
            onChangeText={setSmallText}
          />

          <FormInputBig
            multiline={true}
            numberOfLines={4}
            icon="format-align-justify"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Texto grande"
            ref={bigTextRef}
            returnKeyType="next"
            onSubmitEditing={() => timeRef.current.focus()}
            value={bigText}
            onChangeText={setBigText}
          />

          <FormInput
            icon="access-alarm"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="A cada 2h ou 4h ou 15h..."
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={time}
            onChangeText={setTime}
          />

          <Separator />

          <SubmitButton onPress={handleSubmit}>Adicionar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

export default withNavigationFocus(AddNotification);

AddNotification.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});
