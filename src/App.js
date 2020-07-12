import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Lyrics from "./components/Lyrics";
import Band from "./components/Band";
import Error from "./components/Error";
import axios from "axios";
import styled from "@emotion/styled";

function App() {
	// setting var states

	const [allData, setAllData] = useState({});
	const [lyric, setLyric] = useState("");
	const [bandInfo, setBandInfo] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log(allData);
		if (Object.keys(allData).length === 0) return;

		const getLyrics = async () => {
			const { artist, song } = allData;

			try {
				const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
				const urlBand = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
				const [resLyrincs, resBand] = await Promise.all([
					axios(urlLyrics),
					axios(urlBand)
				]);
				// Success 🎉
				setError(false);
				setLyric(resLyrincs.data.lyrics);
				setBandInfo(resBand.data.artists[0]);
			} catch (error) {
				// Error 😨
				setError(true);
				console.log("No se ha encontrado la cancion");
			}
		};
		getLyrics();
	}, [allData, lyric]);

	return (
		<Fragment>
			<div className="container ">
				<div className="row ">
					<div className="container bg-primary">
						{" "}
						<h1 className="text-center">Lyrics Finder</h1>{" "}
					</div>
				</div>
				<div className="row ">
					<Form setAllData={setAllData} />
					<div className="row ">
						<div className="container mt-3">
							{error ? <Error message="No se ha encontrado nada" /> : null}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6">
						{error ? null : <Band bandInfo={bandInfo} />}
					</div>
					<div className="col-sm-12 col-md-6">
						{error ? null : <Lyrics lyric={lyric} />}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
