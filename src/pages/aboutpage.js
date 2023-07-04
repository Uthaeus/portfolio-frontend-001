import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";  

import mainImage from "../assets/images/about-img.jpg";

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
                <div className="about-page-image-wrapper">
                    <img className="about-page-image" src={mainImage} alt="about page" width='100%' />

                    <Link to='/contact' className="contact-link">Contact Me</Link>
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
                </div>
            </div>

            
            <div className="about-page-skills-wrapper">

                {user?.role === 'site_admin' && <p className="add-skill-btn" onClick={() => setShowSkillForm(prev => !prev)}>{showSkillForm ? 'close form' : 'add new skill'}</p>}

                {showSkillForm && <SkillForm addSkillHandler={addSkillHandler} />}

                <p className="about-page-skills-title">what i'm up to these days</p>

                <div className="about-page-skills">
                    {skills.map(skill => <SkillItem key={skill.id} skill={skill} user={user} removeSkillHandler={removeSkillHandler} />)}
                </div>

            </div>
        </div>
    )
}

export default Aboutpage;