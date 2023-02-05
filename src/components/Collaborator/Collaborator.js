import './Collaborator.css';

const Collaborator = (props) => {
  return (
    <div className='collaborator'>
      <div className='header' style={{backgroundColor: props.backgroundColor}}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='footer'>
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
      </div>
    </div>
  );
}

export default Collaborator;