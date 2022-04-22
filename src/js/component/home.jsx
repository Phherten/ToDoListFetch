import React from "react";
import { useState } from "react";

const Home = () => {
	const [tarea, addTarea] = useState([]);
	const [nuevaTarea, addNuevaTarea] = useState("");

	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="row">
				<div className="col-12 mt-5">
					<h1>tareas</h1>
				</div>
			</div>
			<div className="row d-flex flex-column align-items-center mt-5">
				<div className="tareas" id="tareas">
					<input
						type="text"
						class="form-control-lg border-0"
						placeholder="introduce tarea"
						ide="tarea"></input>
				</div>
				<div className="hojaDos" id="tareasdos"></div>
				<div className="hojaTres" id="tareastres"></div>
			</div>
		</div>
	);
};

export default Home;
