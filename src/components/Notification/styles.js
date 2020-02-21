import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

   /* opacity: ${props => (props.past ? 0.6 : 1)}; */
  
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #0f0;
`;

export const SmallText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #999;
`;

export const BigText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Time = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  font-size: 18px;
  margin-top: 4px;
  font-weight: bold;
`;

export const SwitchCustom = styled.Switch``;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  /* margin-left: 15px; */
`;
