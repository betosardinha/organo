import React from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Collaborator.css';
import BaseAvatar from '../../images/base-avatar.jpg';

function Collaborator({
  collaborator, backgroundColor, onDelete, onFavorite,
}) {
  const favorite = () => {
    onFavorite(collaborator.uuid);
  };

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="delete"
        size={25}
        onClick={() => onDelete(collaborator.uuid)}
      />
      <div className="collaborator-header" style={{ backgroundColor }}>
        <Img src={[collaborator.image, BaseAvatar]} alt={collaborator.name} />
      </div>
      <div className="collaborator-info">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.role}</h5>
        <div className="favorite">
          {
            collaborator.favorite
              ? <AiFillHeart size={25} onClick={favorite} color="#FF0000" />
              : <AiOutlineHeart size={25} onClick={favorite} />
          }
        </div>
      </div>
    </div>
  );
}

Collaborator.propTypes = {
  collaborator: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default Collaborator;
