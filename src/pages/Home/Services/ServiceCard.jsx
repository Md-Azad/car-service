const ServiceCard = ({service}) => {
    const {title,img,price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} />
  </figure>
  <div className="card-body items-start">
    <h2 className="card-title">{title}</h2>
    <p>price: {price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;
