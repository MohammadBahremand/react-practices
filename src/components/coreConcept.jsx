


 export default function CoreConcept ({title , description , image}){
    return (
      <li>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
   
      </li>
    )
  }