
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
        .then(res => {
            if (res.ok) {
                removeSkillHandler(skill.id);
            }
        })
        .catch(error => console.log('skill delete error', error));
    }

    return (
        <div className="skill-item">
            <div className="skill-item-image-wrapper">
                <img src={imageUrl} alt={skill.title} width='40px' height='40px' className='skill-image' />
            </div>

            <div className="skill-item-body">
                <p className='skill-title'>{skill.title}</p>
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={skill.percent_utilized} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{
                        width: `${skill.percent_utilized}%`
                    }}>
                        {skill.percent_utilized}%
                    </div>
                </div>
            </div>

            {user?.role === 'site_admin' && <p className="skill-delete-btn" onClick={deleteHandler}>X</p>}
        </div>
    );
}

export default SkillItem;