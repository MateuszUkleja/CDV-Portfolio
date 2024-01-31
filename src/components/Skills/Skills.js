import "./Skills.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";




function Skills() {
	return (
		<div id='skills'>
			<h1 className='skill-title'>Skills</h1>
			<div className='skill-container'>
				<div className='skill-col'>
					<h3 className='skill-col-title'>Frontend developer</h3>
					<div className='skills-tree'>
						<div className='skill-list'>
							<p><FaHtml5 /> Html</p>
                            <span>zaawansowany</span>
							<p><FaCss3 /> Css</p>
                            <span>zaawansowany</span>
							<p><IoLogoJavascript /> JavaScript</p>
                            <span>średnio zaawansowany</span>
						</div>
						<div className='skill-list'>
							<p><FaBootstrap /> Bootstrap</p>
                            <span>podstawowy</span>
							<p><FaGitSquare /> Git</p>
                            <span>podstawowy</span>
							<p><FaReact /> React</p>
                            <span>podstawowy</span>
						</div>
					</div>
				</div>
				<div className='skill-col'>
					<h3 className='skill-col-title'>Backend developer</h3>
					<div className='skills-tree'>
						<div className='skill-list'>
							<p><FaNodeJs /> Node.js</p>
                            <span>podstawowy</span>
							<p><FaPhp /> PHP</p>
                            <span>podstawowy</span>
							<p><AiOutlineConsoleSql /> SQL</p>
                            <span>średnio zaawansowany</span>
						</div>
						<div className='skill-list'>
							<p><FaJava /> Java</p>
                            <span>podstawowy</span>
							<p><FaPython /> Python</p>
                            <span>podstawowy</span>
							<p><SiMongodb /> MongoDB</p>
                            <span>średnio zaawansowany</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
