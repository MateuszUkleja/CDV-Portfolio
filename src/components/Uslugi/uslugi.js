import "./uslugi.css"
import React, { useState } from "react"

const ServiceCard = ({
	title,
	description,
	price,
	onAddClick,
	onRemoveClick,
}) => {
	const [isAdded, setIsAdded] = useState(false)

	const handleButtonClick = () => {
		if (isAdded) {
			onRemoveClick(price)
		} else {
			onAddClick(price)
		}
		setIsAdded(!isAdded)
	}

	return (
		<div className='service-card'>
			<h3 className='service-title'>{title}</h3>
			<p className='service-description'>{description}</p>
			<p className='service-price'>{price} zł</p>
			<button
				onClick={handleButtonClick}
				className={isAdded ? "remove-btn" : "add-btn"}>
				{isAdded ? "Remove" : "Dodaj"}
			</button>
		</div>
	)
}

const Uslugi = () => {
	const [totalAmount, setTotalAmount] = useState(0)

	const handleAddService = amount => {
		const newTotalAmount = totalAmount + amount
		setTotalAmount(newTotalAmount)
	}

	const handleRemoveService = amount => {
		const newTotalAmount = totalAmount - amount
		setTotalAmount(newTotalAmount)
	}

	return (
		<div id="uslugi">
            <h1 className="uslugi-title">Usługi</h1>
			<div className='uslugi-col'>
				<ServiceCard
					title='Strona Landing Page'
					description='Świetne rozwiązanie dla firm chcących pojawić się w internecie przy niskim budżecie i małej ilości treści'
					price={800}
					onAddClick={handleAddService}
					onRemoveClick={handleRemoveService}
				/>
				<ServiceCard
					title='Rozbudowana strona'
					description='Strona tego typu pozwoli ci zaprezentować twoją firmę szczegółowo dzięki czemu zyskasz niebanalny wygląd oraz zaintersowanie nowych klientów'
					price={1500}
					onAddClick={handleAddService}
					onRemoveClick={handleRemoveService}
				/>
                <ServiceCard
					title='Formatowanie i czyszczenie komputera'
					description='Przywróć swojemu komputerowi szybkość i efektywność dzięki mojej usłudze formatowania i czyszczenia. Eliminuje zbędne pliki, optymalizujemy system i usuwamy złośliwe oprogramowanie'
					price={400}
					onAddClick={handleAddService}
					onRemoveClick={handleRemoveService}
				/>
			</div>
            <div className='calculator'>
					<h3>Kalkulator wydatków: {totalAmount} zł</h3>
			</div>
		</div>
	)
}

export default Uslugi
