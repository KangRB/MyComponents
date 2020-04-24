import React from 'react';
import { storiesOf } from '@storybook/react';
import Throttle from '../index';
import note from './note.md';
// import { action } from '@storybook/addon-actions';

storiesOf('Throttle', module).add('节流', () => <Throttle />, {
  notes: note,
});
