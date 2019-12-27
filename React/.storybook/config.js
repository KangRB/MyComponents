import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// automatically import all files ending in *.stories.js
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
setConsoleOptions({
  panelExclude: []
});
configure(require.context('../components', true, /stories\.js$/), module);
