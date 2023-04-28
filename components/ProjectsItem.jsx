import Link from "next/link";

const ProjectsItem = (props) => {
  return (
    <div className={"app__projects__item"}>
      <Link href='/gallery' className="app__projects__item-link">
        <img
          alt='preview image'
          className={"app__projects__item-image"}
          src={`${props.imageUrl}`}
        />
        <div className='app__projects__item__overlay'>
          <div className='app__projects__item__overlay-inner'>
            <div className='app__projects__item__overlay-info'>
              <span className='app__projects__item__overlay-info__object'>
                {props.object}
              </span>
              <span className='app__projects__item__overlay-info__meters'>
                {props.meters}
              </span>
            </div>
          </div>
        </div>
        <label className="app__projects__item-label">
        <span className="app__projects__item-label__name">
          {props.object}
          </span>
        <span className="app__projects__item-label__area">
          {props.meters}
        </span>
      </label>
      </Link>
    </div>
  );
};

export default ProjectsItem;
