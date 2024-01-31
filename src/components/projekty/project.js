import "./project.css"
import Carousel from "react-bootstrap/Carousel"
import img1 from "./projekt 1.png"
import img2 from "./pojekt 2.png"
import img3 from "./projekt 3.png"

function Project() {
	return (
		<div id="project">
            <h1 className="project-title">Projekty</h1>
			<div className='carousel-container'>
				<Carousel>
					<Carousel.Item>
						<img src={img1} alt="projekt1" className="project-img"></img>
						<Carousel.Caption>
							<h3>Mój pierwszy projekt strona wizytówka</h3>
							<p>Project techstack: HTML, CSS, JavaScript</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img src={img2} alt="projekt2" className="project-img"></img>
						<Carousel.Caption>
							<h3>Projekt dzienika szkolnego</h3>
							<p>Project techstack: HTML, CSS, JavaScript, Node.js, SQL</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img src={img3} alt="projekt3" className="project-img"></img>
						<Carousel.Caption>
							<h3>Portfolio moj pierwszy projekt w react</h3>
							<p>Project techstack: React, Bootstrap, HTML, CSS</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	)
}

export default Project
