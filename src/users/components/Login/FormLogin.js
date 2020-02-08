// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, memo } from 'react';
import Input from 'components/Input';
import { Button } from 'react-bootstrap';
import validators from 'utils/Validators';

type Props = {
  signIn: Function,
  isProcessing: boolean
};
const FormLogin = ({ signIn, isProcessing }: Props) => {
  // define states
  const [errors, setErrors] = useState({});

  // define ref
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  // rules for validate form
  const rules = {
    username: ['userName', 'required'],
    password: ['password', 'required']
  };

  /**
   * Handle Login
   */
  const handleLogin = () => {
    let validation = {};
    const objSubmit = {
      username: userRef.current ? userRef.current.value : '',
      password: passwordRef.current ? passwordRef.current.value : ''
    };

    validation = validators(objSubmit, rules);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});
    signIn(objSubmit);
  };

  return (
    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
      <form className="pt-3">
        <h4 className="text-center">LOGIN FORM</h4>
        <div className="form-group">
          <Input
            type="text"
            className="form-control form-control-lg"
            placeholder="Username"
            innerRef={userRef}
            errorMsg={errors.username}
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            innerRef={passwordRef}
            errorMsg={errors.password}
          />
        </div>
        <div className="mt-3">
          <Button variant="primary" className="w-100" onClick={handleLogin}>
            SIGN IN
          </Button>
        </div>
        <div className="my-2 d-flex justify-content-between align-items-center">
          <a href="#" className="auth-link text-black">
            Forgot password?
          </a>
        </div>
        <div className="text-center font-weight-light">
          Don&rsquo;t have an account?
          <a href="register.html" className="text-primary">
            Create
          </a>
        </div>
      </form>
    </div>
  );
};

export default memo<Props>(FormLogin);
