### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
react is a front end framwork that makes making dynamic pages alot easier. 
- What is Babel?
Babel is a library that converts javascript you write to javascript that the browser can read
- What is JSX?
jsx is html that is written in javascript
- How is a Component created in React?
a component is created by rendering them in a parent element that is then rendered by react-dom
- What are some difference between state and props?
state can be updated while props are static pieces of data that you pass to child components.
- What does "downward data flow" refer to in React?
this means that it is alot easier to pass data down to the children components than it is to pass it back up
- What is a controlled component?
controlled component is a component that react had the handle on and takes care of
- What is an uncontrolled component?
and unconteolled component is a component that react doesnt have as much control over like a file upload
- What is the purpose of the `key` prop when rendering a list of components?
the key prop lets react know what components to re render when they get changed
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
its a poor choice since if you update the array in anyway the id will change and react will become confused
- Describe useEffect.  What use cases is it used for in React components?
useEffect lets you write what you want to happen when the component is rendered or when something changes. A good use case would be calling an api when the page first loads
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows you a place for storage of certain nodes or information that you can then access in  your code alot easeier
- When would you use a ref? When wouldn't you use one?
you can use ref when you need to usea  timer in your app. you dont want them to become another "variable"
- What is a custom hook in React? When would you want to write one?
a custom hook is when you write your own code/ hook to cut down on duplicate code in your app