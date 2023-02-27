function Button (props) {
  const {
    isDisabled,
    type = "button",
    text = "Save",
  } = props;

  return (
    <button type={type} disabled={isDisabled} className="btn btn-primary">{text}</button>
  )
}

export default Button;
