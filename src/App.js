import React from 'react';
import Header from './components/Header';

import styled from '@emotion/styled';

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #ffffff;
	padding: 3rem;
`;

function App() {
	return (
		<Contenedor>
			<Header titulo='Cotizador de Seguros' />

			<ContenedorFormulario>
				<h1>formulario</h1>
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
