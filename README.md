# Equal Experts Calculator - React/Typescript
TDD built calculator using version `5b8d0fd276b6d288905ed2f63a934e057e8feca2` of the instructions.

To run this app:

- `npm install`
- `npm start`
- open a browser and visit [localhost:3000](http://localhost:3000)


To run the tests:
- `npm test`


## My Thinking 
I chose to use a custom hook, initially thinking of maybe using `useReducer` but opting for the simpler choice in several `useStates`. I could've used a class (or my preference to use functions) to achieve the state changing and management but wanted to do things in a React-y way.

For the UI, I would have added Storybook so that Components could be viewed separately and I've chosen to use behavioural testing in the unit test I've written.


## Thing's I would improve / didn't complete
- Doing something fancier with the buttons, at the moment they're reverse of how a calculator displays them.
- Testing all the components. I've added a simple test for the `<Button>` component only to show usage of `@testing-library/react`
- Adding more methods to the `useCalculator` hook for completeness sake.
- More types and reduce duplication where there is some.
- Improve the styling, I've kept this to ~2 hours.



