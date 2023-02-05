import './Select.css';

const Select = (props) => {
  return (
    <div className='select'>
      <label>{props.label}</label>
      <select placeholder="aaaaaa" required={props.required} value={props.value} onChange={event => props.onChange(event.target.value)}>
        <option value="" disabled selected hidden>Escolha o time</option>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default Select;