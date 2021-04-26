import { useState } from 'react';
import './App.css';
import AddSkills from './AddSkills';

function App() {
	const [ persona, setPersona ] = useState({ nombre: 'Andrey', edad: 100, coche: false });
	const [ skills, setSkills ] = useState([ { id: 1, name: 'Kotlin' }, { id: 2, name: 'Swift' } ]);

	const sumarEdad = () => {
		setPersona((prePersona) => ({
			...prePersona,
			edad: prePersona.edad + 1
		}));
	};

	const toggleCoche = () => {
		setPersona((prePersona) => ({
			...prePersona,
			coche: !prePersona.coche
		}));
	};

	const addNewSkill = (value) => {
		const newSkill = {
			id: skills[skills.length - 1].id + 1,
			name: value
		};

		setSkills((prevSkills) => [ ...prevSkills, newSkill ]);
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-12">
					<h1>Hola {persona.nombre}</h1>
					<p>Edad: {persona.edad}</p>
					<p>¿Tiene coche?: {persona.coche ? 'Sí' : 'No'}</p>

					<p>Habilidades: </p>
					<ul>{skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}</ul>

					<button onClick={sumarEdad} type="button" className="btn btn-primary">
						Sumar edad
					</button>
					<button onClick={toggleCoche} type="button" className="btn ms-2 btn-primary">
						{persona.coche ? 'No tiene coche' : 'Tiene coche'}
					</button>
				</div>
				<div className="col-12">
					<AddSkills total={skills.length} addNewSkill={addNewSkill} />
				</div>
			</div>
		</div>
	);
}

export default App;
