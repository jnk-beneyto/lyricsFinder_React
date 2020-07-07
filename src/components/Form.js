import React, { Fragment } from "react";
import "./form.css";

const Form = () => {
	return (
		<Fragment>
			<div className="container form">
				<form>
					<div className="row">
						<div className="col-sm-12 col-md-5">
							<div className="form-group mb-2">
								<label for="inputArtista" class="col-sm-2 col-form-label">
									Artista
								</label>
								<input
									type="text"
									className="form-control"
									id="inputArtista"
									placeholder="Artista"
								/>
							</div>
						</div>
						<div className="col-sm-12 col-md-5 mt-2 ">
							<div className="form-group mb-2">
								<label for="inputCancion" class="col-sm-2 col-form-label">
									Canción
								</label>
								<input
									type="text"
									className="form-control"
									id="inputCancion"
									placeholder="Canción"
								/>
							</div>
						</div>
						<div className="col-sm-12 col-md-2 d-flex">
							<div className="container">
								<button className="btn" type="submit">
									Buscar
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default Form;
