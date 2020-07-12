import React from "react";

const Error = ({ message }) => {
	return (
		<div className="container mt-3">
			<div className="row justify-content-center">
				<div className="alert alert-danger col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4">
					<h5 className="text-center">{message}</h5>
				</div>
			</div>
		</div>
	);
};

export default Error;
