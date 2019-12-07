import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from '../DemoComponent/index';
import note from './note.md';

storiesOf('Demo', module).add('样例', () => <Demo />, {
  notes: note
});
