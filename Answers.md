1. What problem does the context API help solve?
  `We get rid of prop drilling by adding global data to allow intermediate components or multiple components to share`

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  `a. actions: information that is sent to your store;`
  `b. reducers: the logic that is used to change your state/store`
  `c. store: contains the state or data`
  `The store is known as the 'single source of truth' because it contains the current state of the data even after changing the application`
  
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  `Application state is state that ALL components can access while component state is state that a single or a few components can access.`
  `An example of what to use would be: if you are passing props, use the term Application state and when using context API, use the term Component state`

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  `Redux-thunk is a middleware which is a middleman of sorts that allows asynchronous activity. Redux-thunk intercepts the activity creator to check whether it is an action (continues to reducer) or a function (continues to dispatch).`

5. What is your favorite state management system you've learned and this sprint? Please explain why!
  `I think I like Redux because you know exactly what is/will happen every step of the way. Overall, I like its predictability aspect.`
