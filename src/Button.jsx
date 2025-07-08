import "./Button.css";
function Button({ label, type = "button", color = "primary", link, onClick }) {
  const className = `btn ${color}`;

  if (link) {
    return (
      <a href={link} className={className}>
        {label}
      </a>
    );
  }
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
}
function Clickme(){
navigator("https://www.google.com/");
}


export default Button;
