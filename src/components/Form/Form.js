import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import './Form.css';

const Form = (props) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.onRegisteredCollaborator({
      name,
      role,
      image,
      team
    });
    setName('');
    setRole('');
    setImage('');
    setTeam('');
  };

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>{t('form.title')}</h2>
        <InputText
          required={true}
          label={t('form.inputNameTitle')}
          placeholder={t('form.inputNamePlaceholder')}
          value={name}
          onChange={value => setName(value)}
        />

        <InputText
          required={true}
          label={t('form.inputRoleTitle')}
          placeholder={t('form.inputRolePlaceholder')}
          value={role}
          onChange={value => setRole(value)}
        />

        <InputText
          required={true}
          label={t('form.inputImageTitle')}
          placeholder={t('form.inputImagePlaceholder')}
          value={image}
          onChange={value => setImage(value)}
        />

        <Select  required={true} label={t('form.inputTeamTitle')} items={props.teams} value={team} onChange={value => setTeam(value)} />

        <Button>
          {t('form.submitButton')}
        </Button>
      </form>
    </section>
  );
}

export default Form;