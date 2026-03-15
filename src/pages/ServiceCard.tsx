type Props = {
 title:string;
 image:string;
 description:string;
};

const ServiceCard:React.FC<Props> = ({
 title,
 image,
 description
}) => {

 return(
  <div className="card">
   <img src={image}/>
   <h3>{title}</h3>
   <p>{description}</p>
  </div>
 );
};

export default ServiceCard;