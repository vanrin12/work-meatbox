// @flow

import React from 'react';

type Props = {
  placeholder?: string,
  value?: string | number,
  errorMsg?: string,
  innerRef?: any,
  label?: string,
  disabled?: boolean,
  type?: string,
  onBlur?: Function,
  onChange?: Function,
  onFocus?: Function,
  onKeyPress?: Function,
  onPaste?: Function,
  readOnly?: boolean,
  variant?: 'outline',
  pattern?: string,
  inputMode?: string
};

const Input = ({
  placeholder = '',
  value = '',
  errorMsg = '',
  innerRef = null,
  label = '',
  disabled = false,
  readOnly = false,
  type = 'text',
  onBlur = null,
  onChange = null,
  onFocus = null,
  onKeyPress = null,
  onPaste = null,
  variant = 'outline',
  pattern = '',
  inputMode = ''
}: Props) => {
  return (
    <div
      className={`input__wrapper ${
        variant !== 'outline' ? ` input__wrapper--${variant}` : ''
      }`}
    >
      {!!label && <p className="input__label">{label}</p>}
      <div className="input__box">
        <input
          className="form-control form-control-lg"
          placeholder={placeholder}
          ref={innerRef}
          defaultValue={value}
          disabled={disabled}
          type={type}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onPaste={onPaste}
          pattern={pattern}
          inputMode={inputMode}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          autoCapitalize="none"
        />
      </div>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  errorMsg: '',
  innerRef: null,
  label: '',
  disabled: false,
  readOnly: false,
  type: 'text',
  onBlur: null,
  onFocus: null,
  onChange: null,
  onKeyPress: null,
  onPaste: null,
  variant: 'outline',
  pattern: '',
  inputMode: ''
};

export default Input;
