import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
  return (
    <section className='team' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
      <div className='collaborators'>
        {props.collaborators.map(collaborator => <Collaborator name={collaborator.name} role={collaborator.role} image={collaborator.image} />)}
      </div>
    </section>
  );
}

export default Team;