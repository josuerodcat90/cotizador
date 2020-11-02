import React, { useState } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
// import Result from './components/Result';

import styled from '@emotion/styled';
import Form from './components/Form';

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const FormContainer = styled.div`
	background-color: #ffffff;
	padding: 3rem;
`;

function App() {
	const [resume, setResume] = useState({
		Quotation: 0,
		data: {
			brand: '',
			year: '',
			plan: '',
		},
	});
	const { data } = resume;

	return (
		<Container>
			<Header title='Cotizador de Seguros' />

			<FormContainer>
				<Form setResume={setResume} />
				<Resume data={data} />
			</FormContainer>
		</Container>
	);
}

export default App;
