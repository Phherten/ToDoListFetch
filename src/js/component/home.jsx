import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
	const [tarea, addTarea] = useState("");
	const [tareas, addNuevaTarea] = useState([]);
	useEffect(() => {
		console.log(tareas);
	}, [tareas]);
	const arrayTareas = tareas.map((tareaIndividual, i) => {
		return (
			<div
				className="d-flex justify-content-between pb-2 ps-3"
				id="lineaTarea">
				{tareaIndividual}

				<button className="borrar" id="papelera">
					<i class="fas fa-trash"></i>
				</button>
			</div>
		);
	});
	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="row">
				<div className="col-12 mt-5">
					<h1>tareas</h1>
				</div>
			</div>
			<div className="row d-flex flex-column align-items-center mt-5">
				<div className="tareas pb-5" id="tareas">
					<div className="lineaInput d-flex justify-content-between">
						<input
							type="text"
							class="form-control-lg border-0"
							placeholder="introduce tarea"
							id="tarea"
							onChange={(e) => addTarea(e.target.value)}
							value={tarea}
							autoComplete="off"
						/>
						<button
							className="agregarTarea"
							onClick={() => addNuevaTarea([...tareas, tarea])}>
							<i class="fas fa-plus-circle"></i>
						</button>
					</div>
					<div className="texto">{arrayTareas}</div>
				</div>
				<div className="hojaDos" id="tareasdos"></div>
				<div className="hojaTres" id="tareastres"></div>
			</div>
		</div>
	);
};

export default Home;
