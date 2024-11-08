function formatCurrency(cant: number) {
	const formater = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	return formater.format(cant);
}
export default formatCurrency;
