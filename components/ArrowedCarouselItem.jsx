const ArrowedCarouselItem = (props) => {
  return (
    <div className='app__arrowed-carousel__item'>
      <img
        className='app__arrowed-carousel__item-image'
        src={`assets/images/${props.imagUrl}`}
      />
    </div>
  );
};

export default ArrowedCarouselItem;
