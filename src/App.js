import React, { Fragment } from "react";
import Form from "./components/Form";

function App() {
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="container bg-primary">
						{" "}
						<h1 className="text-center">Lyrics Finder</h1>{" "}
					</div>
				</div>
				<div className="row">
					<Form />
				</div>
			</div>
		</Fragment>
	);
}

export default App;
