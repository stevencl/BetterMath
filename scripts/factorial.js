function factorial(n) {
	n = parseInt(n);
	var result = 1;
	for(i = 1; i <= n; i++) {
		result = result * i;
	}
	return result;
}