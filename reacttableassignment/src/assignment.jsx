import React from 'react';

function Assignment(props) {
    return (
        <div>
            <h2>React-Applying Redux</h2>
            <ol><li> What is Redux?</li>
            <ul><li><p>Redux is an open-source JavaScript library commonly used with frameworks like React or Angular for managing the state of an application. It provides a predictable state container, which means that the state of an entire application is stored in a single JavaScript object, known as the "store." The state in Redux is read-only, and the only way to change it is by emitting an action, which is a plain JavaScript object describing the change.</p>
            <br />
            <h5>Key concepts in Redux:</h5>
            <ol type='I'>
                <li>Store: The store is a JavaScript object that holds the state of the application. It is the single source of truth for the entire application's state.</li>
                <li>Actions: Actions are plain JavaScript objects that represent changes to the state. They must have a type property indicating the type of action being performed.</li>
                <li>Reducers: Reducers are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as arguments and return a new state.</li>
                <li>Dispatch: Actions are dispatched to the store using the dispatch method. This triggers the state change based on the action and invokes the corresponding reducer.</li>
                <li>Middleware: Middleware in Redux allows you to extend the store's capabilities by intercepting actions before they reach the reducer. It is commonly used for tasks like logging, asynchronous operations, or modifying actions.</li>
            </ol>
            <br />
            <p>Redux promotes a unidirectional data flow, making it easier to understand how data changes occur in an application. While it can add some boilerplate code, it's particularly beneficial for larger and more complex applications where managing state becomes challenging. Redux is often used in conjunction with React, but it can be employed with other JavaScript frameworks or libraries as well.</p>
            </li></ul>
            <li>What is Redux Thunk used for?</li>
            <ul><li><p>Redux Thunk is a middleware for the Redux state management library in JavaScript applications. It allows you to write action creators that return functions instead of plain action objects. This is particularly useful for handling asynchronous operations in Redux, such as making API calls, performing side effects, and managing the flow of asynchronous data.
                <br />
                <br />
                In a typical Redux application, action creators are functions that create and return action objects. These objects are then dispatched to the Redux store to update the state. However, when dealing with asynchronous operations like fetching data from a server, traditional action creators may not be sufficient because they don't support the delay inherent in asynchronous operations.
                <br /> 
                <br /> 
                Redux Thunk introduces a way to deal with asynchronous logic by allowing action creators to return functions. These functions receive the dispatch and getState functions as arguments, enabling them to dispatch multiple actions over time or conditionally based on the current state. This ability to return functions instead of plain action objects gives developers more flexibility when dealing with asynchronous tasks.
                </p></li></ul>
            <li>What is Pure Component? When to use Pure Component over Component?</li>
            <ul><li><p>In React, a Pure Component is a specific type of component that is designed to optimize rendering performance by automatically implementing a shouldComponentUpdate method with a shallow prop and state comparison. The primary purpose of a Pure Component is to prevent unnecessary re-renders when the component's props and state haven't changed.
  <br />
  <br />
Here are key characteristics of a Pure Component:
<ol type='I'>
    <li>Shallow Prop and State Comparison: A Pure Component performs a shallow comparison of its props and state to determine whether it should re-render. Shallow comparison means it checks for differences at the top level of objects, but it doesn't perform a deep comparison of nested objects or arrays.</li>
    <li>Automatic shouldComponentUpdate: Unlike regular components, Pure Components automatically implement a shouldComponentUpdate method that performs the shallow comparison. This method returns false if the props and state are the same as the previous render, preventing unnecessary re-renders.</li>
    <br />
</ol>
 <h3>Use Pure Component When:</h3>
 <ul type='square'>
    <li>You want to optimize performance by avoiding unnecessary re-renders.</li> 
    <li>The component's rendering is solely based on its props and state.</li> 
    <li>You don't rely on deep equality checks for nested objects or arrays in props and state.</li> 
 </ul>
 <h3>Use Pure Component When:</h3>
 <ul type='square'>
    <li>You need to implement a custom shouldComponentUpdate logic that goes beyond shallow comparison (e.g., deep equality checks for complex data structures).</li>
    <li>The component relies on external factors other than props and state to decide whether it should re-render.</li>
    <li>You want more control over the update process and don't mind manually optimizing for performance.</li>
 </ul>
<br />
<br />
In most cases, using Pure Components can be beneficial for improving performance, especially in scenarios where components have a large number of renders or when rendering depends primarily on props and state. However, it's important to be aware of the limitations, particularly when dealing with complex data structures that require deep comparisons.
</p></li></ul>
<li>What is the second argument that can optionally be passed tosetState and what is
its purpose?</li>
<ul><li><p>
    
In React, the setState function is commonly used to update the state of a component. The setState function takes two arguments:
<br />
<ol type='I'>
    <li>Partial State Object or Updater Function (Required): The first argument can either be a partial state object (an object representing the changes to be merged into the current state) or a function that receives the current state and props and returns a partial state object.</li>
    <li>Callback Function (Optional): The second argument is an optional callback function that will be executed after the state is updated and the component has been re-rendered.</li>
</ol>
<br />
The purpose of the callback function is to perform actions that depend on the updated state. Since setState is asynchronous, React batches state updates and re-renders the component at a later time. By using the callback, you ensure that your code runs after the state has been successfully updated and the component has re-rendered, allowing you to work with the most up-to-date state.
    </p></li></ul>
            </ol>
        </div>
    );
}

export default Assignment;