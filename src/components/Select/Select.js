import { useTranslation } from 'react-i18next'
import './Select.css';

const Select = (props) => {
  const { t } = useTranslation();

  return (
    <div className='select'>
      <label>{props.label}</label>
      <select required={props.required} value={props.value} onChange={event => props.onChange(event.target.value)}>
        <option value="" disabled hidden>{t('form.inputTeamPlaceholder')}</option>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default Select;