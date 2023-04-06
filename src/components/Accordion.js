import chevron from "../assets/icons8-chevron-left-96.png"

const Accordion = ({ question, answer }) => {
	function handleClick(e) {
		const {
			currentTarget: { parentElement: target }
		} = e
		target.classList.toggle("collapse")
	}

	return (
		<div className="accordion">
			<div className="accordion-header" onClick={handleClick}>
				<h4 className="accordion-title">{question}</h4>
				<span className="accordion-icon">
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
