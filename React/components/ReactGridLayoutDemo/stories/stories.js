import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactGridLayoutDemo from '../myFirstGrid';
import AddRemove from '../addRemove';
import note from './note.md';
// import { action } from '@storybook/addon-actions';

storiesOf('ReactGridLayoutDemo', module)
  .add('网格布局', () => <ReactGridLayoutDemo />, {
    notes: note
  })
  .add('可删除', () => <AddRemove />, {
    notes: note
  });
