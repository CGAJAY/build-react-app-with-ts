import React from "react";

// Step 1: Define the props interface for the Greeting component
interface GreetingProps {
	// Ensures the `name` prop is a string.
	name: string;
}

// Step 2: Use the React.FC type to specify that the component accepts GreetingProps
const Greeting: React.FC<GreetingProps> = ({ name }) => {
	return <div>Hello, {name}!</div>;
};

// Step 3: Export the component as default
export default Greeting;
