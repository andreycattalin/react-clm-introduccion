import React, { Fragment, useRef } from 'react';

export default function AddSkills({ addNewSkill, total }) {
	const inputSkill = useRef();

	const addSkill = () => {
		const inputValue = inputSkill.current.value;
		addNewSkill(inputValue);
		inputSkill.current.value = null;
	};

	return (
		<Fragment>
			<div className="input-group mt-3">
				<input ref={inputSkill} type="text" className="form-control" placeholder="Habilidad" />
				<button onClick={addSkill} className="btn btn-outline-secondary" type="button" id="button-addon2">
					Añadir habilidad
				</button>
			</div>
			<p>Tenemos {total} habilidades añadidas.</p>
		</Fragment>
	);
}
