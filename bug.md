Bug reproduction video http://s.csssr.ru/U02D248T6/2019-06-19-17-20-21-s17ns.mp4

Steps:
1. Ensure that there are no node_modules and yarn.lock in project directory
2. `yarn install`
3. `yarn run storybook` project starts successfully
4. `rm -rf node_modules`
5. `yarn install`
6. `yarn run storybook` project fails to start
