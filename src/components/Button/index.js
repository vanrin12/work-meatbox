// @flow
// libs
import React, { memo } from 'react';

type Props = {
  onPress: Function,
  isDisabled?: boolean,
  type: string,
  text: string,
  customClassName?: string,
  isLoading?: boolean
};

export const Button = ({
  isDisabled,
  onPress,
  type,
  text,
  customClassName = '',
  isLoading
}: Props) => (
  <button
    className={`btn ${type ? `btn--${type}` : ''} ${customClassName}`}
    disabled={isDisabled || isLoading}
    onClick={onPress}
    type="button"
  >
    <p className="btn__text">{text}</p>
  </button>
);

Button.defaultProps = {
  isDisabled: false,
  customClassName: '',
  isLoading: false
};

export default memo<Props>(Button);
