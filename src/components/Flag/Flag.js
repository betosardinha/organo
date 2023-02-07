import './Flag.css';

const Flag = ({ image, isSelected, ...props }) => {
  return (
    <img alt="flag" src={image} className={isSelected ? 'flag flag-selected' : 'flag'} {...props} />
  )
}

export default Flag;