import './CardComponent.css';

const CardComponent = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default CardComponent;
