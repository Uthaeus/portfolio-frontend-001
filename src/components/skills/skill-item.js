
import defaultImage from '../../assets/images/hammer-thumb.jpg';

function SkillItem({ skill, user, removeSkillHandler }) {
    let imageUrl = skill.icon_image?.url ? `http://localhost:4000${skill.icon_image.url}` : defaultImage;

    function deleteHandler() {
        fetch('http://localhost:4000/skills/' + skill.id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            removeSkillHandler(skill.id);
        })
        .catch(error => console.log('skill delete error', error));
    }

    return (
        <div className="skill-item">
            <img src={imageUrl} alt={skill.title} width='30%' height='60px' className='skill-image' />

            <div className="skill-item-body">
                <p className='skill-title'>{skill.title}</p>
                <p className='skill-pct'>{skill.percent_utilized}</p>
            </div>

            {user?.role === 'site_admin' && <p className="skill-delete-btn" onClick={deleteHandler}>X</p>}
        </div>
    );
}

export default SkillItem;