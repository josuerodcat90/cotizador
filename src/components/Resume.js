import React from 'react';

const Resume = ({ data }) => {
	const { brand, year, plan } = data;

	if (brand === '' || year === '' || plan === '') return null;

	return (
		<>
			<h2>Resumen de Cotizacion</h2>
			<ul>
				<li>Marca: </li>
				<li>Año: </li>
				<li>Plan: </li>
			</ul>
		</>
	);
};

export default Resume;
