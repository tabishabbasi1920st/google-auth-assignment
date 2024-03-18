import "./index.css";

const HighlightCard = ({ eachCard }) => {
  const { figure, id, imageUrl, title, bgColor, imgHeight, imgWidth } =
    eachCard;

  return (
    <li className="highlight-card">
      <div
        className="highlight-card-wrapper"
        style={{ backgroundColor: bgColor }}
      >
        <div className="highlight-card-img-container">
          <img
            style={{ height: imgHeight, width: imgWidth }}
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="info-container">
          <p className="highlight-card-title">{title}</p>
          <p className="highlight-card-figure">{figure}</p>
        </div>
      </div>
    </li>
  );
};

export default HighlightCard;
