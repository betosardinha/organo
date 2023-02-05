import './InputText.css';

const InputText = (props) => {
  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} value={props.value} required={props.required} onChange={event => props.onChange(event.target.value)} />
    </div>
  );
}

export default InputText;