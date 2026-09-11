*** ph-hero, b14, A-5 Dev Stack Builder Website:DevStack is a simple and interactive React application where users can explore different web development technologies and build their own technology stack.



**** Technology that I useD:-----------
React
TypeScript
Vite
Tailwind CSS
DaisyUI
React Icons
React Toastify
JavaScript
HTML
CSS


*** 3 features about my project:--------
1. Browse Technologies
2. Build Own Stack
3. Manage Stack



**********React Questions & Answers**************

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.It makes React components easier to write and understand because we can write the UI structure directly inside our component.


2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data that belongs to a component and can change over time.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage changing data inside a React component.

In this project, I used useState to store the technologies selected by the user.

const [selectedTechnologies, setSelectedTechnologies] =
  useState<technologyType[]>([]);

When a user adds or removes a technology, the state is updated.


4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component, such as fetching data, calling an API, or working with external resources.

In this project, useEffect can be used to fetch the technology data from a JSON file when the component loads.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.It helps React understand which item has been added, removed, or changed.


6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying something only when a specific condition is true.

For example, we can show an empty stack message when there are no selected technologies.

{technologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <Stack technologies={technologies} />
)}

Another example used in the project is displaying the technology badge only when a badge exists:

{technology.badge && (
  <div className="badge">
    {technology.badge}
  </div>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.

In this project, Technologies passes the technology data and the handleStackTechnology function to TechnologyCard.

<TechnologyCard
  technology={technology}
  handleStackTechnology={handleStackTechnology}
/>

The child can send information back to the parent by calling the function received through props.