import './InputText.css';

const InputText = (props) => {
  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} required={props.required} />
    </div>
  );
}

export default InputText;