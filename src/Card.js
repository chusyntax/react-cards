import img from './112803.jpg';

function Card() {
    return (
      <div className="card">
  <div className="cardBody">
      <img src={img} alt="landscape" />
      <h2 className="cardTitle">First heading</h2>
      <p className="cardDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?</p>
  </div><button className="cardButton">More Information</button>
</div>
    );
  }
  
  export default Card;
  