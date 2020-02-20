import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, CustomPicker, Placeholder} from './styles';

function Select({style, icon, placeholder, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      {placeholder && <Placeholder>{`${placeholder}:`}</Placeholder>}
      <CustomPicker {...rest} ref={ref} />
    </Container>
  );
}

Select.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Select.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Select);
