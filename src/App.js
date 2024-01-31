import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Banner from "./components/Banner/Banner"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/about/about"
import Contact from "./components/Contact/Contact"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"
import Project from "./components/projekty/project"
import Uslugi from './components/Uslugi/uslugi';
function App() {
	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<About />
			<Skills />
			<Project />
			<Uslugi />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
