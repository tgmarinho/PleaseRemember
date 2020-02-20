import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {Picker} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const FormInputBig = styled(Input)`
  margin-bottom: 10px;
  height: 200px;
  /* flex-direction: column; */
  /* justify-content: space-around; */
  /* align-content: flex-start; */
  /* align-items: flex-start; */
  /* padding-top: 10px;sadsadsad */
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: #e5556e;
`;

export const LogoutButton = styled(Button)`
  margin-top: 12px;
  background: #d44059;
`;

// export const Select = styled(Picker)`
//   fontSize: 30,
//       alignSelf: 'center',
//       color: 'red'

// `;
