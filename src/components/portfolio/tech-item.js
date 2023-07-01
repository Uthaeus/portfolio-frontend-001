import defaultImage from '../../assets/images/giants-thumb.png';

function TechItem({ technology, removeTechHandler }) {
    let imageUrl = technology.image?.url ? `http://localhost:4000${technology.image.url}` : defaultImage;

    return (
        <div className="detail-technology-item">
            <div className='detail-technology-image-wrapper'>
                <img src={imageUrl} alt="technology thumbnail" className="detail-technology-image" width='50px' height='50px' />
            </div>

            <div className='detail-technology-content'>
                <p className="detail-technology-name">{technology.name}</p>
            
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={technology.percent_utilized} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{
                        width: `${technology.percent_utilized}%`
                    }}>
                        {technology.percent_utilized}%
                    </div>
                </div>
            </div>

            <p className="detail-technology-delete-btn" onClick={() => removeTechHandler(technology.id)}>X</p>
        </div>
    );
}

export default TechItem;