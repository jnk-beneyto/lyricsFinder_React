import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Lyrics = ({ lyric }) => {
	if (lyric.length === 0) return null;

	const Box = styled.p`
		white-space: pre-line;
		align-content: center;
		text-align: center;
	`;

	const Title = styled.div`
		align-content: center;
		text-align: center;
		font-size: 20px;
		margin-bottom: 10px;
		/* width: 20%; */
		color: violet;
		border-bottom: 2px solid violet;
		font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	`;

	return (
		<Fragment>
			{/* <div className="container bg-danger d-flex justify-content-center"> */}
			<div className="row d-flex justify-content-center">
				<div className="col-6 justify-content-center">
					<Title>Letra de la canción</Title>
				</div>
				<div className="col-6 justify-content-center">
					<Box>{lyric}</Box>
				</div>
			</div>
			{/* </div> */}
		</Fragment>
	);
};

export default Lyrics;
