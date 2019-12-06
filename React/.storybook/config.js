import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(
  require.context('../components/stories', true, /\.stories\.js$/),
  module
);
