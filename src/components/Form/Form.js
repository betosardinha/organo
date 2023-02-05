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

  return (
    <section className='form'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText label="Nome" placeholder="Digite seu nome" />
        <InputText label="Cargo" placeholder="Digite seu cargo" />
        <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
        <Select label="Time" items={teams}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}

export default Form;