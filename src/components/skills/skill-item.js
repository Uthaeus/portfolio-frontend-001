
import defaultImage from '../../assets/images/hammer-thumb.jpg';

function SkillItem({ skill, user }) {
    let imageUrl = skill.icon_image?.url ? `http://localhost:4000${skill.icon_image.url}` : defaultImage;

    return (
        <div className="skill-item">
            <img src={imageUrl} alt={skill.title} width='30%' height='60px' className='skill-image' />

            <div className="skill-item-body">
                <p className='skill-title'>{skill.title}</p>
                <p className='skill-pct'>{skill.percent_utilized}</p>
            </div>

            {user?.role === 'site_admin' && <p className="skill-delete-btn">X</p>}
        </div>
    );
}

export default SkillItem;