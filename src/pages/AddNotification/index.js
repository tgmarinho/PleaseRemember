import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
Icon.loadFont();
import Header from '../../components/Header';
import {Picker, Text, View, StyleSheet} from 'react-native';
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

export default function AddNotification() {
  const smallTextRef = useRef();
  const bigTextRef = useRef();
  const timeRef = useRef();

  const [title, setTitle] = useState('');
  const [smallText, setSmallText] = useState('');
  const [bigText, setBigText] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setSmallText('');
    setBigText('');
    setTime('');
    setTitle('');
  }, []);

  function handleSubmit() {}

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
