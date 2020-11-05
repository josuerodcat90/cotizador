import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
	background-color: rgb(127, 234, 227);
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
`;

const QuotationContainer = styled.div`
	text-align: center;
	padding: 0.5rem;
	border: 1px solid #26c6da;
	background-color: rgb(127, 234, 227);
	margin-top: 1rem;
	position: relative;
`;

const Quotation = styled.p`
	color: #00838f;
	padding: 1rem;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
`;

const Result = ({ quotation }) => {
	return quotation === 0 ? (
		<Message>Please choose Brand, Year and Plan.</Message>
	) : (
		<QuotationContainer>
			<Quotation>Precio a pagar: {`€. ${quotation}`}</Quotation>
		</QuotationContainer>
	);
};

export default Result;
