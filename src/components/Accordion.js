import chevron from "../assets/icons8-chevron-left-96.png"

const Accordion = ({ question, answer }) => {
	function handleClick(e) {
		const { currentTarget: target } = e
		const targetContent = e.currentTarget.parentElement.nextSibling
		targetContent.classList.toggle("collapse")
		target.classList.toggle("collapse")
	}

	return (
		<div className="accordion">
			<div className="accordion-header">
				<h4 className="accordion-title">{question}</h4>
				<span className="accordion-icon" onClick={handleClick}>
					<img src={chevron} />
				</span>
			</div>
			<div className="accordion-content">
				<p>{answer}</p>
			</div>
		</div>
	)
}

export default Accordion
