export function ArgumentHomepage({ icon, h3text, ptext }) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{h3text}</h3>
      <p>{ptext}</p>
    </div>
  );
}
