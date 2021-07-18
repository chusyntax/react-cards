import img from './112803.jpg';

function Card(props) {
    return (
      <div className="card">
  <div className="cardBody">
      <img src={img} alt="landscape" />

      <h2 className="cardTitle">{props.heading}</h2>
      <p className="cardDescription">{props.description}</p>
  </div>
  <button className="cardButton">More Information</button>
</div>
    );
  }
  
  export default Card;
  