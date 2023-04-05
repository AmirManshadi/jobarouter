const getCareers = async () => {
	const res = await fetch("http://localhost:5500/careers");
	return res.json();
};

export default getCareers;
