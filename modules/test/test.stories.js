import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Test from './index'

storiesOf('test', module)
  .add('just test', () => (
    <Test onClick={action('test click')} />
  ))