import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import './Form.css';

const Form = () => {
  const teams = [
    'Programming',
    'Front-End',
    'Data Science',
    'Devops',
    'Design/UX',
    'Management'
  ];

  const onSave = (event) => {
    event.preventDefault();
  };

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText required={true} label="Nome" placeholder="Digite seu nome" />
        <InputText required={true} label="Cargo" placeholder="Digite seu cargo" />
        <InputText required={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <Select  required={true} label="Time" items={teams}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}

export default Form;