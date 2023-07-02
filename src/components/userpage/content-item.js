
function ContentItem({ title, data }) {
    return (
        <div className="content-item">
            <p className="content-text">{title}: </p>
            <p className="content-data">{data}</p>
        </div>
    );
}

export default ContentItem;