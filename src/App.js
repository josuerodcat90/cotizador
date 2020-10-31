import React from 'react';
import Header from './components/Header';

import styled from '@emotion/styled';

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const FormContainer = styled.div`
	background-color: #ffffff;
	padding: 3rem;
`;

function App() {
	return (
		<Container>
			<Header title='Cotizador de Seguros' />

			<FormContainer>
				<h1>formulario</h1>
			</FormContainer>
		</Container>
	);
}

export default App;
