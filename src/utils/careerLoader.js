const careerLoader = async ({ params }) => {
	const { id } = params
	const res = await fetch(`http://localhost:5500/careers/${id}`)
	if (!res.ok) throw Error("such career does not exist !")
	return res.json()
}

export default careerLoader
