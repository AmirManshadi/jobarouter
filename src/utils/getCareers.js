const getCareers = async () => {
	const res = await fetch("http://localhost:5500/careers")
	if (!res.ok) throw Error("could not fetch careers")
	return res.json()
}

export default getCareers
