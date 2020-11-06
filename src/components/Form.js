import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getYearDiff, costByBrand, costByPlan } from '../utils/Helper';

const Field = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	display: block;
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
	-webkit-appearance: none;
`;

const InputRadio = styled.input`
	margin: 0 1rem;
`;

const Button = styled.button`
	background-color: #00838f;
	font-size: 16px;
	width: 100%;
	padding: 1rem;
	color: #ffffff;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	transition: background-color 0.3s ease;
	margin-top: 2rem;

	&:hover {
		background-color: #26c6da;
		cursor: pointer;
	}
`;

const Error = styled.div`
	background-color: red;
	color: white;
	padding: 1rem;
	width: 100%;
	text-align: center;
	margin-bottom: 2rem;
`;

const Form = ({ setResume, setLoading }) => {
	const [data, setData] = useState({
		brand: '',
		year: '',
		plan: '',
	});

	const [error, setError] = useState(false);

	/// Extract the data from state
	const { brand, year, plan } = data;

	/// Get data from Form and set to State
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	/// Handle the Form data submit
	const handleSubmit = (e) => {
		e.preventDefault();

		/// Validate blank fields
		if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
			setError(true);
			return;
		}

		setError(false);

		let baseResult = 2000;

		/// Get the diff between years
		const yearDiff = getYearDiff(year);

		/// Substract 3% of cost for each year
		baseResult -= (yearDiff * 3 * baseResult) / 100;

		/// American car 15%
		/// Asiatic car 5%
		/// European car 30%
		baseResult = costByBrand(brand) * baseResult;

		/// Basic plan 20%
		/// Complete plan 50%
		const planIncrement = costByPlan(plan);
		baseResult = parseFloat(planIncrement * baseResult).toFixed(2);

		setLoading(true);

		setTimeout(() => {
			setLoading(false);

			/// Total
			setResume({
				quotation: Number(baseResult),
				data,
			});
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit}>
			{error ? <Error>All fields are required.</Error> : ''}
			<Field>
				<Label>Brand</Label>
				<Select name='brand' value={brand} onChange={handleChange}>
					<option value=''>--- Select ---</option>
					<option value='american'>American</option>
					<option value='european'>European</option>
					<option value='asiatic'>Asiatic</option>
				</Select>
			</Field>
			<Field>
				<Label>Year</Label>
				<Select name='year' value={year} onChange={handleChange}>
					<option value=''>--- Select ---</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
					<option value='2017'>2017</option>
					<option value='2016'>2016</option>
					<option value='2015'>2015</option>
					<option value='2014'>2014</option>
					<option value='2013'>2013</option>
					<option value='2012'>2012</option>
				</Select>
			</Field>
			<Field>
				<Label>Plan</Label>
				<InputRadio
					type='radio'
					name='plan'
					value='basic'
					checked={plan === 'basic'}
					onChange={handleChange}
				/>{' '}
				Basic
				<InputRadio
					type='radio'
					name='plan'
					value='complete'
					checked={plan === 'complete'}
					onChange={handleChange}
				/>{' '}
				Complete
			</Field>
			<Button type='submit'>Quotate</Button>
		</form>
	);
};

Form.propTypes = {
	setResume: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
};

export default Form;
