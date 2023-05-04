import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes, { string } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import './Form.css';

function Form({ teams, onRegisteredCollaborator }) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();

    const uuid = uuidv4();

    onRegisteredCollaborator({
      uuid,
      name,
      role,
      image,
      team,
    });
    setName('');
    setRole('');
    setImage('');
    setTeam('');
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>{t('form.title')}</h2>
        <InputText
          required
          label={t('form.inputNameTitle')}
          placeholder={t('form.inputNamePlaceholder')}
          value={name}
          onChange={(value) => setName(value)}
        />

        <InputText
          required
          label={t('form.inputRoleTitle')}
          placeholder={t('form.inputRolePlaceholder')}
          value={role}
          onChange={(value) => setRole(value)}
        />

        <InputText
          required
          label={t('form.inputImageTitle')}
          placeholder={t('form.inputImagePlaceholder')}
          value={image}
          onChange={(value) => setImage(value)}
        />

        <Select required label={t('form.inputTeamTitle')} items={teams} value={team} onChange={(value) => setTeam(value)} />

        <Button>
          {t('form.submitButton')}
        </Button>
      </form>
    </section>
  );
}

Form.propTypes = {
  teams: PropTypes.arrayOf(string).isRequired,
  onRegisteredCollaborator: PropTypes.func.isRequired,
};

export default Form;
