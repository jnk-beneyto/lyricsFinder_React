import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Band = ({ bandInfo }) => {
	if (Object.keys(bandInfo).length === 0) return null;

	const Main = styled.div`
		max-width: 100%;
		overflow-x: none;
	`;

	const Img = styled.img`
		max-width: 100%;
		margin: 10px auto;
	`;

	const Box = styled.p`
		white-space: pre-line;
	`;

	const Title = styled.div`
		align-content: center;
		text-align: center;
		font-size: 20px;
		margin-bottom: 10px;
		/* width: 50%; */
		color: violet;
		border-bottom: 2px solid violet;
		font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	`;

	const {
		strGenre,
		strArtist,
		strCountry,
		strArtistThumb,
		strBiographyES
	} = bandInfo;

	return (
		<Fragment>
			<Main className="container">
				<Title>Información del Artista</Title>
				<div className="row">
					Nombre: <b>{strArtist}</b> - Procedencia: <b>{strCountry}</b>
				</div>
				<div className="row">
					Género: <b>{strGenre}</b>
				</div>
				<div className="row mt-3">
					<Img src={strArtistThumb} alt="pic" />
				</div>
				<div className="row mt-3">
					<h3>
						<b>BIOGRAFíA</b>
					</h3>
					<Box>
						{strBiographyES === null ? "No se encontró info" : strBiographyES}
					</Box>
				</div>
			</Main>
		</Fragment>
	);
};

export default Band;
