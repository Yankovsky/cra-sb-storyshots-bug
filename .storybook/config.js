import { addParameters, configure, addDecorator } from '@storybook/react'

import { withThemes } from 'storybook-addon-themes';
import requireContext from 'require-context.macro';

const req = requireContext('../src/stories', true, /.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  themes: [
    { name: 'twitter', class: ['theme-twt', 'light-mode'], color: '#00aced', default: true },
    { name: 'facebook', class: ['theme-fb', 'dark-mode'], color: '#3b5998' },
  ],
})

addDecorator((story) => {
  return <div style={{padding: '20px', background: '#f6f6f6'}}>{story()}</div>
})

addDecorator(withThemes);

configure(loadStories, module);
