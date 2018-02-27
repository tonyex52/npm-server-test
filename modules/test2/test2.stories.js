import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Test2 from './index';

storiesOf('test2', module)
  .add('just test2', () => (
    <Test2 onClick={action('click test2 button')}>
      TEST2
    </Test2>
  ))