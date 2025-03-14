export default function Button({ children, type, disabled, onClick }) {
  const getButtonType = (type) => {
    switch (type) {
      case "ghost":
        return "btn--ghost";
        break;
      case "filled":
        return "btn--filled";
        break;
      case "disabled":
        return "btn--disabled";
        break;
      default:
        return "";
    }
  };
  return (
    <button className={`btn ${getButtonType(type)}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
