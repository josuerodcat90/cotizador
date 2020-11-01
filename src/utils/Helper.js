/// Get the diff between years
export function getYearDiff(year) {
	return new Date().getFullYear() - year;
}

/// Calculate total based on car brand
export function costByBrand(brand) {
	let increment;

	switch (brand) {
		case 'europeo':
			increment = 1.3;
			break;
		case 'americano':
			increment = 1.15;
			break;
		case 'asiatico':
			increment = 1.05;
			break;
		default:
			break;
	}

	return increment;
}
