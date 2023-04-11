import { redirect } from "react-router-dom"

const contactFormAction = async ({ request }) => {
	const data = await request.formData()

	const submission = {
		firstName: data.get("fname"),
		lastName: data.get("lname"),
		email: data.get("email"),
		message: data.get("message"),
	}

	"message".includes("@")

	return redirect("/")
}

export default contactFormAction
