const reactInterviewQuestionsWithAnswers = [
    {
      question: "What is React, and why is it used?",
      answer: "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, and efficiently update and render the right components when data changes."
    },
    {
      question: "What is the Virtual DOM, and how does it differ from the real DOM?",
      answer: "The Virtual DOM is a lightweight copy of the real DOM, used by React to optimize rendering. React updates the Virtual DOM first, compares it to the previous version (a process called 'reconciliation'), and then only updates the necessary parts of the real DOM, improving performance."
    },
    {
      question: "Explain the difference between functional and class components in React.",
      answer: "Class components are ES6 classes that extend `React.Component`, with access to lifecycle methods and state. Functional components are simple JavaScript functions that accept props and return JSX, and they use hooks like `useState` and `useEffect` to handle state and lifecycle events."
    },
    {
      question: "What are props, and how do they differ from state in React?",
      answer: "Props (short for properties) are inputs passed to components to render dynamic data, and they are read-only. State, on the other hand, is used to manage data within a component that can change over time and trigger re-renders."
    },
    {
      question: "What is the use of the `useState` hook in React?",
      answer: "`useState` is a React hook that allows you to add state to functional components. It returns an array with the current state value and a function to update it."
    },
    {
      question: "What is JSX, and how is it different from regular JavaScript?",
      answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. JSX makes it easier to create React elements, but it must be compiled into regular JavaScript using tools like Babel."
    },
    {
      question: "What is a higher-order component (HOC) in React? Provide an example.",
      answer: "A higher-order component is a function that takes a component as an argument and returns a new component with additional props or behavior. It allows code reuse across components. Example: `const EnhancedComponent = higherOrderComponent(WrappedComponent)`."
    },
    {
      question: "What is the purpose of the `useEffect` hook in React?",
      answer: "`useEffect` is a hook that allows you to perform side effects in functional components. Common use cases include fetching data, updating the DOM, and setting up subscriptions. It runs after the render and can clean up when the component is unmounted or when certain dependencies change."
    },
    {
      question: "What is the Context API, and how is it different from passing props?",
      answer: "The Context API allows you to pass data through the component tree without having to pass props manually at every level (called 'props drilling'). It is useful for sharing global data like themes, user authentication, or settings across the app."
    },
    {
      question: "What is the difference between controlled and uncontrolled components in React?",
      answer: "Controlled components are form elements whose values are controlled by React state. Uncontrolled components rely on the DOM to handle their current values and are accessed via refs. Controlled components offer more control and are the preferred way in React."
    },
    {
      question: "Explain the concept of lifting state up in React.",
      answer: "Lifting state up is a pattern where you move the shared state to the closest common ancestor of the components that need it. This allows different components to share the same state and ensures consistency across the application."
    },
    {
      question: "How does React handle re-rendering, and how can you optimize performance?",
      answer: "React uses the Virtual DOM to efficiently update only the parts of the real DOM that have changed. To optimize performance, you can use `React.memo` to prevent unnecessary re-renders, split code using `React.lazy` and `Suspense`, and use the `useCallback` and `useMemo` hooks to avoid unnecessary function and value recalculations."
    },
    {
      question: "What are React portals, and when should you use them?",
      answer: "React portals allow you to render components outside of their parent component’s DOM hierarchy. They are useful when you need to render elements, like modals or tooltips, that should visually appear outside the component hierarchy but remain functionally tied to React’s event system."
    },
    {
      question: "How does server-side rendering (SSR) work in React, and what are its advantages?",
      answer: "SSR in React allows you to render components on the server and send fully rendered HTML to the client, which improves SEO and page load time. Frameworks like Next.js make SSR easier to implement in React."
    },
    {
      question: "Explain how you would implement code-splitting in a React application.",
      answer: "Code-splitting is a technique used to split large bundles into smaller pieces, which are loaded on-demand. In React, you can implement code-splitting using `React.lazy` and `Suspense` to dynamically load components as needed, reducing the initial bundle size and improving load times."
    },
    {
      question: "What is memoization in React, and when would you use `React.memo` or `useMemo`?",
      answer: "Memoization is an optimization technique that stores the result of expensive function calls and reuses the cached result when the same inputs occur. `React.memo` prevents unnecessary re-renders of functional components, and `useMemo` caches computed values. Both are used when performance is a concern in applications."
    }
  ];
export default reactInterviewQuestionsWithAnswers; 