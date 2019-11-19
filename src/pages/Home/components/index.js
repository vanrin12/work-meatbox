// @flow

import React, { memo } from 'react';
import Button from 'components/Button';

type Props = {
  testRedux: Function
};

const Home = ({ testRedux }: Props) => {
  return (
    <>
      <h1>This is homepage, click button to test working redux flow</h1>
      <Button
        onPress={() => {
          testRedux();
          console.log('dispatch redux action');
        }}
        text="test"
        type="primary"
      />
    </>
  );
};

export default memo<Props>(Home);
