export function Button({ title, funct }) {
  return (
    <button className="save-button" onClick={funct}>
      {title}
    </button>
  );
}
