import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";   

import mainImage from "../assets/images/about-img.jpg";

import { UserContext } from "../store/user-context";
import SkillForm from "../components/skills/skill-form";
import SkillItem from "../components/skills/skill-item";
import { set } from "react-hook-form";

function Aboutpage() {
    const { user } = useContext(UserContext);
    const [skills, setSkills] = useState([]);
    const [showSkillForm, setShowSkillForm] = useState(false);
    const [showSocials, setShowSocials] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/skills')
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(error => console.log('skills error', error));
    }, []);

    function addSkillHandler(skill) {
        setSkills(prevSkills => [...prevSkills, skill])
    }

    function removeSkillHandler(id) {
        setSkills(prevSkills => prevSkills.filter(skill => skill.id !== id));
    }

    function socialsToggleHandler() {
        let socialsDropdown = document.querySelector('.socials-dropdown');
        
        if (showSocials) {
            socialsDropdown.classList.remove('show-dropdown');
        } else {
            socialsDropdown.classList.add('show-dropdown');
        }
        setShowSocials(prev => !prev);
    }

    function projectsToggleHandler() {
        let projectsDropdown = document.querySelector('.projects-dropdown');

        if (showProjects) {
            projectsDropdown.classList.remove('show-dropdown');
        } else {
            projectsDropdown.classList.add('show-dropdown');
        }
        setShowProjects(prev => !prev);
    }

    return (
        <div className="about-page-container">
            <div className="about-page-body">
                <div className="about-page-image-wrapper">
                    <img className="about-page-image" src={mainImage} alt="about page" width='100%' />
                </div>

                <div className="about-page-content">
                    <h1 className="about-page-title">About Me</h1>

                    <div className="about-page-blurb-wrapper">
                        <p className="about-page-blurb">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla euismod, nisl nec tincidunt dapibus, velit diam
                            1consectetur nunc, quis tincidunt arcu quam nec mauris.
                            Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        </p>
                    </div>

                    <div className="about-page-content-actions">
                        <button className="content-btn contact-btn">Contact Me</button>
                        <button onClick={socialsToggleHandler} className="content-btn socials-btn">Socials</button>
                        <button onClick={projectsToggleHandler} className="content-btn projects-btn">Projects</button>
                    </div>
                </div>
            </div>

            <div className="about-page-dropdowns">
                <div className="projects-dropdown">
                    <p className="project-item">project 1</p>
                    <p className="project-item">project 2</p>
                    <p className="project-item">project 3</p>
                    <p className="project-item">project 4</p>
                    <p className="project-item">project 5</p>
                </div>

                <div className="socials-dropdown">
                    <a className="socials-item" href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a className="socials-item" href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a className="socials-item" href='https://twitter.com/' target='_blank' rel="noreferrer">
                        <i className="bi bi-twitter"></i>
                    </a>

                    <a className="socials-item" href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a className="socials-item" href='https://www.github.com/' target='_blank' rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
            
            <div className="about-page-skills-wrapper">

                {user?.role === 'site_admin' && <p className="add-skill-btn" onClick={() => setShowSkillForm(prev => !prev)}>{showSkillForm ? 'close form' : 'add new skill'}</p>}

                {showSkillForm && <SkillForm addSkillHandler={addSkillHandler} />}

                <p className="about-page-skills-title">an approximation of where i'm currently putting my time</p>

                <div className="about-page-skills">
                    {skills.map(skill => <SkillItem key={skill.id} skill={skill} user={user} removeSkillHandler={removeSkillHandler} />)}
                </div>

            </div>
        </div>
    )
}

export default Aboutpage;