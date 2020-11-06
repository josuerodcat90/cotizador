/// Get the diff between years
export const getYearDiff = (year) => {
	return new Date().getFullYear() - year;
};

/// Calculate total based on car brand
export const costByBrand = (brand) => {
	let increment;

	switch (brand) {
		case 'european':
			increment = 1.3;
			break;
		case 'american':
			increment = 1.15;
			break;
		case 'asiatic':
			increment = 1.05;
			break;
		default:
			break;
	}

	return increment;
};

/// Calculate total based on plan type
export const costByPlan = (plan) => {
	return plan === 'basic' ? 1.2 : 1.5;
};

/// Capitalize words
export const capitalize = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
