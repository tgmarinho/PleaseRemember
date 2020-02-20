import {Picker, Text} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const CustomPicker = styled(Picker)`
  flex: 1;
  background: rgba(0, 0, 0, 0.1);
  line-height: 21px;
  margin-left: 10px;
  color: #222;
`;

export const Placeholder = styled(Text)`
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
  line-height: 21px;
`;
