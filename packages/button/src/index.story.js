import React from 'react';
import {storiesOf} from '@storybook/react';
// kinda pointlessly cute and could be confusing, change if it becomes an issue;
import Button from '.';

storiesOf('Button', module).add('default', () => <Button>{'Button'}</Button>)
