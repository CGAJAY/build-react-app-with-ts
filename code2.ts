import React, { Component } from "react";

// Step 1: Define the state interface for the Counter component
interface CounterState {
	// Eensures the state has a `count` property of type number.
	count: number;
}

// Step 2: Define the class component and specify types for props (none) and state
// Props are `{}` because no props are passed to this component.
class Counter extends Component<{}, CounterState> {
	// Step 3: Initialize the state with a `count` of 0
	state: CounterState = {
		count: 0,
	};

	// Step 4: Create an increment method to update the state
	// No need for additional typing; TypeScript infers `setState` correctly.
	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	// Step 5: Render the component
	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

// Step 6: Export the component as default
export default Counter;
