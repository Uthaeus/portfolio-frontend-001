import defaultImage from '../../assets/images/giants-thumb.png';

function TechItem({ technology, removeTechHandler }) {
    let imageUrl = technology.image?.url ? `http://localhost:4000${technology.image.url}` : defaultImage;

    function deleteHandler() {
        removeTechHandler(technology.id);
        fetch('http://localhost:4000/technologies/' + technology.id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .catch(error => console.log('delete technology error', error));
    }

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

            <p className="detail-technology-delete-btn" onClick={deleteHandler}>X</p>
        </div>
    );
}

export default TechItem;