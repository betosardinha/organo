import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Select.css';

function Select({
  label, required, value, onChange, items,
}) {
  const { t } = useTranslation();

  return (
    <div className="select">
      <label htmlFor={label}>
        {label}
      </label>

      <select required={required} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="" disabled hidden>{t('form.inputTeamPlaceholder')}</option>
        {items.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(string).isRequired,
};

export default Select;
