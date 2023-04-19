01. State-count: 0
02. Actions-increment, decrement, reset
03. Reducers:
   a. increment-> count=> count+1
   b. decrement-> count=> count-1
   c. reset-> count=>0
04. Store
05. Providing store in react.
06. Using store in index.js file as it is the root file of this project.
          e:g:
          index.js-> App.js-> Counter.js
          though, index.js is the root file,
          if we provide (react provider) store as property here,
          we can access that store from anywhere of this project
 