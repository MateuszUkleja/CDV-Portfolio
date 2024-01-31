import React, { useState } from "react"
import "./about.css"
import aboutImg from "./background-small.png"

function About() {
	const [aktywnyPrzycisk, setAktywnyPrzycisk] = useState(null)

	const handleButtonClick = przyciskId => {
		setAktywnyPrzycisk(przyciskId)
	}

	return (
		<div id='about'>
			<div className='container'>
				<div className='about-row'>
					<div className='about-col-1'>
						<img src={aboutImg} alt='obrazek'></img>
					</div>
					<div className='about-col-2'>
						<h1 className='sub-title'>O Mnie</h1>
						<p>
							Jestem studentem informatyki. Mimo braku doświadczenia zawodowego,
							z pasją rozwijam umiejętności w technologiach HTML, CSS i
							JavaScript. Aktywnie uczestniczę w kursach zdobywając praktyczne
							doświadczenie w projektowaniu responsywnych interfejsów. Moje
							zainteresowania skupiają się na nowoczesnych trendach w
							projektowaniu stron internetowych. Jako skrupulatny i szybko
							uczący się student, jestem gotów wkładać wysiłek w zdobywanie
							nowych umiejętności. Chociaż moja droga zawodowa dopiero się
							rozpoczyna, jestem przekonany, że moje zaangażowanie pozwoli mi
							skutecznie rozwijać się jako frontend developer.
						</p>
						<div className='tab-titles'>
							<p
								className={`tab-links ${
									aktywnyPrzycisk === 1 ? "active-link" : ""
								}`}
								onClick={() => handleButtonClick(1)}>
								Edukacja
							</p>
							<p
								className={`tab-links ${
									aktywnyPrzycisk === 2 ? "active-link" : ""
								}`}
								onClick={() => handleButtonClick(2)}>
								Kursy
							</p>
							<p
								className={`tab-links ${
									aktywnyPrzycisk === 3 ? "active-link" : ""
								}`}
								onClick={() => handleButtonClick(3)}>
								Kwalifikacje
							</p>
						</div>
						<div
							id='jeden'
							className={`tab-contents ${
								aktywnyPrzycisk === 1 ? "active-tab" : ""
							}`}>
							<ul>
								<li>
									<span>Collegium Da Vinci informatyka - zaocznie</span>
									<br></br>Październik 2022 – OBECNIE, Poznań
								</li>
								<li>
									<span>CKZiU nr 2 Elektronik Technik informatyk</span>
									<br></br>Wrzesień 2018 – Kwiecień 2022, Zielona Góra
								</li>
							</ul>
						</div>
						<div
							id='dwa'
							className={`tab-contents ${
								aktywnyPrzycisk === 2 ? "active-tab" : ""
							}`}>
							<ul>
								<li>
									<span>
										Program Frontend w Praktyce kurs organizowany przez firmę
										Better Call JavaScript
									</span>
									<br></br>Stycze 2024 - Obecnie
								</li>
								<li>
									<span>
										Kurs FullStack Developer - kompletny od Podstaw do Mastera
									</span>
									<br></br>Luty 2023 - Czerwiec 2023
								</li>
								<li>
									<span>
										Grafika komputerowa “Modernizacja kształcenia zawodowego w
										Mieście Zielona Góra
									</span>
									<br></br>styczeń 2022 - Czerwiec 2022
								</li>
							</ul>
						</div>
						<div
							id='trzy'
							className={`tab-contents ${
								aktywnyPrzycisk === 3 ? "active-tab" : ""
							}`}>
							<ul>
								<li>
									<span>
										Kwalifikacja EE.08 - Montaż i eksploatacja systemów
										komputerowych, urządzeń peryferyjnych i sieci
									</span>
									<br></br>Styczeń 2022
								</li>
								<li>
									<span>
										Kwalifikacja EE.09 - Programowanie tworzenie i
										administrowanie stronami internetowymi i bazami danych
									</span>
									<br></br>Czerwiec 2023
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
