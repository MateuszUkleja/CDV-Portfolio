import React, { useState } from "react"
import "./NavBar.css"

function Navbar() {
	const [active, setActive] = useState("nav__menu")
	const [icon, setIcon] = useState("nav__toggler")
	const navToggle = () => {
		if (active === "nav__menu") {
			setActive("nav__menu nav__active")
		} else setActive("nav__menu")

		if (icon === "nav__toggler") {
			setIcon("nav__toggler toggle")
		} else setIcon("nav__toggler")
	}
	return (
		<nav className='nav'>
			<a href='#banner' className='nav__brand'>
				Portfolio.
			</a>
			<ul className={active}>
				<li className='nav__item'>
					<a href='#banner' className='nav__link'>
						Home
					</a>
				</li>
				<li className='nav__item'>
					<a href='#about' className='nav__link'>
                        O mnie
					</a>
				</li>
				<li className='nav__item'>
					<a href='#skills' className='nav__link'>
                        Skills
					</a>
				</li>
				<li className='nav__item'>
					<a href='#project' className='nav__link'>
						Projekty
					</a>
				</li>
				<li className='nav__item'>
					<a href='#uslugi' className='nav__link'>
						Usługi
					</a>
				</li>
                <li className='nav__item'>
					<a href='#contact' className='nav__link'>
						Kontakt
					</a>
				</li>
			</ul>
			<div onClick={navToggle} className={icon}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	)
}

export default Navbar
