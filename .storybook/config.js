import {configure} from '@storybook/react';
// darn cool, but not widely known yet: https://webpack.js.org/guides/dependency-management/#requirecontext
// signature: require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync');
const req = require.context('../packages', true, /.story.js$/);
//other examples:
// a context with all files in the parent folder and descending folders ending with `.stories.js`:
// require.context('../', true, /\.stories\.js$/);
// a context with files from the test directory that can be required with a request endings with `.test.js`:
// require.context('./test', false, /\.test\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);