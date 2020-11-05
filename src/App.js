import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';

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
		quotation: 0,
		data: {
			brand: '',
			year: '',
			plan: '',
		},
	});
	const { quotation, data } = resume;

	return (
		<Container>
			<Header title='Cotizador de Seguros' />

			<FormContainer>
				<Form setResume={setResume} />
				<Resume data={data} />
				<Result quotation={quotation} />
			</FormContainer>
		</Container>
	);
}

export default App;
