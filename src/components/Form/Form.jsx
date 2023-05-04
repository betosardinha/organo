import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes, { string } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import './Form.css';

function Form({ teams, onRegisteredCollaborator, registerTeam }) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamColor, setTeamColor] = useState('');

  const onSaveCollaborator = (event) => {
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

  const onSaveTeam = (event) => {
    event.preventDefault();

    registerTeam({
      name: teamName,
      color: teamColor,
    });
    setTeamName('');
    setTeamColor('');
  };

  return (
    <section className="form">
      <form onSubmit={onSaveCollaborator}>
        <h2>{t('form.collaborator.title')}</h2>
        <InputText
          required
          label={t('form.collaborator.inputNameTitle')}
          placeholder={t('form.collaborator.inputNamePlaceholder')}
          value={name}
          onChange={(value) => setName(value)}
        />

        <InputText
          required
          label={t('form.collaborator.inputRoleTitle')}
          placeholder={t('form.collaborator.inputRolePlaceholder')}
          value={role}
          onChange={(value) => setRole(value)}
        />

        <InputText
          required
          label={t('form.collaborator.inputImageTitle')}
          placeholder={t('form.collaborator.inputImagePlaceholder')}
          value={image}
          onChange={(value) => setImage(value)}
        />

        <Select required label={t('form.collaborator.inputTeamTitle')} items={teams} value={team} onChange={(value) => setTeam(value)} />

        <Button>
          {t('form.collaborator.submitButton')}
        </Button>
      </form>

      <form onSubmit={onSaveTeam}>
        <h2>{t('form.team.title')}</h2>
        <InputText
          required
          label={t('form.team.inputNameTitle')}
          placeholder={t('form.team.inputNamePlaceholder')}
          value={teamName}
          onChange={(value) => setTeamName(value)}
        />

        <InputText
          required
          label={t('form.team.inputColorTitle')}
          placeholder={t('form.team.inputColorPlaceholder')}
          value={teamColor}
          onChange={(value) => setTeamColor(value)}
        />

        <Button>
          {t('form.team.submitButton')}
        </Button>
      </form>
    </section>
  );
}

Form.propTypes = {
  teams: PropTypes.arrayOf(string).isRequired,
  onRegisteredCollaborator: PropTypes.func.isRequired,
  registerTeam: PropTypes.func.isRequired,
};

export default Form;
