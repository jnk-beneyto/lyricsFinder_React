import React, { Fragment, useState } from "react";
import Error from "./Error";

import "./form.css";

const Form = ({ setAllData }) => {
	//setting state vars
	const [error, setError] = useState(false);
	const [artist, setArtist] = useState("");
	const [song, setSong] = useState("");

	const getData = e => {
		e.preventDefault();

		if (artist === "" || song === "") {
			setError(true);
			return;
		}

		//remove error
		setError(false);

		//set Correct data
		setAllData({
			artist,
			song
		});
		console.log({
			artist,
			song
		});
	};

	return (
		<Fragment>
			<div className="container form mt-3">
				<form onSubmit={getData}>
					<div className="row">
						<div className="col-md-4 ">
							<div className="form-group mb-2">
								<label htmlFor="inputArtista" className="col-form-label">
									Artista{" "}
								</label>{" "}
								<input
									type="text"
									className="form-control"
									id="inputArtista"
									placeholder="Artista"
									name="artist"
									onChange={e => setArtist(e.target.value)}
									value={artist}
								/>{" "}
							</div>{" "}
						</div>{" "}
						<div className="col-md-4 ">
							<div className="form-group mb-2">
								<label htmlFor="inputCancion" className="col-form-label">
									Canción{" "}
								</label>{" "}
								<input
									type="text"
									className="form-control"
									id="inputCancion"
									placeholder="Canción"
									name="song"
									onChange={e => setSong(e.target.value)}
									value={song}
								/>{" "}
							</div>{" "}
						</div>{" "}
						<div className="col-md-4 d-flex">
							<button className="btn" type="submit">
								Buscar
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-4">
					{" "}
					{error ? <Error message="rellena todo" /> : null}{" "}
				</div>{" "}
			</div>{" "}
		</Fragment>
	);
};

export default Form;
