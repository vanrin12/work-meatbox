// Libs
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

// Component
import { Button } from 'components/Button';

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('Primary', () => (
    <Button text="Click Me" type="primary" onPress={action('clicked')} />
  ));
