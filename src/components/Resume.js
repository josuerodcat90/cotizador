import React from 'react';
import styled from '@emotion/styled';

import { capitalize } from '../utils/Helper';

const ResumeContainer = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: #ffffff;
	margin-top: 1rem;
`;

const Resume = ({ data }) => {
	const { brand, year, plan } = data;

	if (brand === '' || year === '' || plan === '') return null;

	return (
		<ResumeContainer>
			<h2>Resumen de Cotizacion</h2>
			<ul>
				<li>Marca: {capitalize(brand)}</li>
				<li>Año: {year}</li>
				<li>Plan: {capitalize(plan)}</li>
			</ul>
		</ResumeContainer>
	);
};

export default Resume;
