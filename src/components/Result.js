import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

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
	const nodeRef = useRef(null);

	return quotation === 0 ? (
		<Message>Please choose Brand, Year and Plan.</Message>
	) : (
		<QuotationContainer>
			<TransitionGroup className='quotation'>
				<CSSTransition
					nodeRef={nodeRef}
					classNames='quotation'
					key={quotation}
					timeout={{ enter: 100, exit: 100 }}
				>
					<Quotation ref={nodeRef}>
						Insurance Cost: {`€. ${quotation}`}
					</Quotation>
				</CSSTransition>
			</TransitionGroup>
		</QuotationContainer>
	);
};

Result.propTypes = {
	quotation: PropTypes.number.isRequired,
};

export default Result;
