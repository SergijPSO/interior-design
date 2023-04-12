import PopUp from './PopUp';
import { useState } from 'react';

const ProjectsItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  return(
    <div className={"app__projects__item"} onClick={openModal}>
      <img
        className={"app__projects__item-image"} 
        src={`/assets/images/projects/${props.image}`}
      />

      <div className="app__projects__item__overlay">
        <div className="app__projects__item__overlay-inner">
          <div className="app__projects__item__overlay-info">
            <span className="app__projects__item__overlay-info__object">{props.object}</span>
            <span className="app__projects__item__overlay-info__meters">{props.meters}</span>
          </div>
        </div>
      </div>

      <PopUp className="app__popup" isOpen={isModalOpen} onClose={closeModal}>
        <button className="app__popup__close"  onClick={closeModal}></button>
      </PopUp>

    </div>
  )
}

export default ProjectsItem;