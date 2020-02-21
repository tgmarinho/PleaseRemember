import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container,
  Background,
  Left,
  SmallText,
  BigText,
  Title,
  SwitchCustom,
  Time,
  Info,
} from './styles';
const dataFAke = {
  data: new Date(),
  past: new Date(),
  provider: {name: 'thiago'},
  cancelable: true,
  canceled_at: false,
  title: 'Tomar Remédio',
  smallText: 'Gravidinha linda',
  bigText: 'Tomar esse e aquiele remedio la',
  time: '2h',
  active: true,
};

export default function Notification({data = dataFAke, onCancel}) {
  // const dateParsed = useMemo(() => {
  //   return formatRelative(parseISO(data.date), new Date(), {
  //     locale: pt,
  //     addSuffix: true,
  //   });
  // }, [data.date]);

  function handlerHere() {}

  return (
    <Background past={data.past}>
      <Left>
        <Info>
          <Title>{`${data.title} / ${data.smallText}`}</Title>
          <BigText>{data.bigText}</BigText>
        </Info>

        {/* <Time>{dateParsed}</Time> */}
      </Left>

      <Time>{data.time}</Time>

      <SwitchCustom onValueChange={handlerHere} value={data.active} />
    </Background>
  );
}
