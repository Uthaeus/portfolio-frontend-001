import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";   

import mainImage from "../assets/images/login.jpg";

import { UserContext } from "../store/user-context";
import SkillForm from "../components/skills/skill-form";
import SkillItem from "../components/skills/skill-item";

function Aboutpage() {
    const { user } = useContext(UserContext);
    const [skills, setSkills] = useState([]);
    const [showSkillForm, setShowSkillForm] = useState(false);

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

    return (
        <div className="about-page-container">
            <div className="about-page-body">
                <div className="about-page-image" style={{
                    backgroundImage: mainImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} />

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
                        <button className="content-btn socials-btn">Socials</button>
                        <button className="content-btn projects-btn">Projects</button>
                    </div>
                </div>
            </div>
            
            <div className="about-page-skills-wrapper">

                {user?.role === 'site_admin' && <p className="add-skill-btn" onClick={() => setShowSkillForm(prev => !prev)}>add new skill</p>}

                {showSkillForm && <SkillForm addSkillHandler={addSkillHandler} />}

                <p className="about-page-skills-title">an approximation of where i'm putting my time currently</p>

                <div className="about-page-skills">
                    {skills.map(skill => <SkillItem key={skill.id} skill={skill} user={user} removeSkillHandler={removeSkillHandler} />)}
                </div>

            </div>
        </div>
    )
}

export default Aboutpage;