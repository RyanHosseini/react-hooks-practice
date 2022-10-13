import UseRefExample from "./hooks/UseRefExample";
import UseRefPractice from "./hooks/UseRefPractice"; // funcitonal component
import RefsExercise from "./refs/RefsExercise"; // Class component

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<div className="row pt-4">
					<div className="col">
						<h1 className="text-center mx-auto">Advanced React Hooks</h1>
					</div>
				</div>
				<hr />
			</div>

			{/* <UseRefExample /> */}
			{/* <UseRefPractice /> */}
			<RefsExercise />
		</div>
	);
};

export default App;
