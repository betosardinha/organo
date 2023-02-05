import './Select.css';

const Select = (props) => {
  return (
    <div className='select'>
      <label>{props.label}</label>
      <select required={props.required}>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default Select;