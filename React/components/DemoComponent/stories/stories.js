import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from '../index';
import note from './note.md';
// import { action } from '@storybook/addon-actions';

storiesOf('Demo', module).add('样例', () => <Demo title={'props'} />, {
  notes: note
});
