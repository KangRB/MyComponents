import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
// automatically import all files ending in *.stories.js
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
configure(
  require.context('../components/stories', true, /\.stories\.js$/),
  module
);
