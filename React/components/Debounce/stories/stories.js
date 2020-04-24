import React from 'react';
import { storiesOf } from '@storybook/react';
import Debounce from '../index';
import note from './note.md';
// import { action } from '@storybook/addon-actions';

storiesOf('Debounce', module).add('防抖', () => <Debounce />, {
  notes: note,
});
