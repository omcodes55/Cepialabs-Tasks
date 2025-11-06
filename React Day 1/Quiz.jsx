// 1. React is primarily used for:
// c) Building user interfaces

// 2. JSX allows you to:
// b) Write HTML-like code inside JavaScript

// 3. Which of the following is true about props?
// c) Props are immutable and flow parent → child

// 4. In React, event handlers are written in:
// c) camelCase

// 5. What does React use for efficient DOM updates?
// b) Virtual DOM

// 6. Write a simple React functional component called HelloWorld that displays “Hello, React!”.
import React from "react";

export function HelloWorld() {
  return <h1>Hello, React!</h1>;
}

// 7. What is the difference between a functional component and a class component?
// Ans:-  Functional components are simple JavaScript functions using hooks.
//  Class components use ES6 classes and lifecycle methods.

// 8. Why should React component names start with a capital letter?
// Ans:-  Because React treats lowercase tags as HTML elements and uppercase as custom components.

// 9. Explain the difference between JSX and plain JavaScript in React.
// Ans:-  JSX lets you write HTML-like syntax inside JavaScript; plain JS uses React.createElement().

// 10. Create a button in React that, when clicked, logs "Button clicked!" to the console.
export function ClickButton() {
  const handleClick = () => console.log("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}

// Extra assignment's strech task:

// Q1. Why do we use React?
// We use React to build fast and interactive user interfaces for web applications. It helps developers create reusable components, making code easier to maintain. React also uses a Virtual DOM, which updates only the necessary parts of a webpage, improving performance and user experience.

// Q2. What is Vite? And how is it better than the traditional Create React App (CRA)?
// Vite is a modern build tool that makes creating React apps faster and smoother than the traditional Create React App (CRA). It provides instant server startup, faster hot reloading, and smaller, optimized builds. In simple terms, Vite is quicker, more efficient, and better suited for modern React development compared to CRA.



