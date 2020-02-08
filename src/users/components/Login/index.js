// @flow
/* eslint-disable react-hooks/exhaustive-deps */

import React, { memo, useEffect } from 'react';
import { API } from 'utils/Apis';
import ROUTERS from 'constants/routers';
import FormLogin from './FormLogin';
import { Types } from '../../redux';
import { Spinner } from 'react-bootstrap';

type Props = {
  signIn: Function,
  type: string,
  token: string,
  isProcessing: boolean,
  errors: string,
  history: {
    push: Function,
    location: {
      pathname: string
    }
  }
};
const Signin = ({ signIn, type, token, isProcessing, history }: Props) => {
  /**
   * handle effect after login success
   */
  useEffect(() => {
    switch (type) {
      case Types.SIGN_IN_SUCCESS:
        API.setHeader('Authorization', 'Bearer' + token);
        history.push(ROUTERS.ROOT);
        break;
      default:
        break;
    }
  }, [token, type, history.location.pathname]);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              {isProcessing ? (
                <div className="wrapper-loading">
                  <Spinner
                    animation="grow"
                    role="status"
                    className=""
                    text=""
                    variant="dark"
                    size="lg"
                  />
                </div>
              ) : (
                <FormLogin signIn={signIn} isProcessing={isProcessing} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(Signin);
