import '../styles/BodyHome.css'; 

const BodyHome = () => {
  return (
    <div className="main-content">
    <h1 className='route-page'>Accueil</h1>
    <div className="card-container">
      {['Demande de collaboration', 'Projets en cours de réalisation', 'Projets terminés'].map((title) => (
        <div key={title} className="card">
          <h2>{title}</h2>
          <div className="card-content"></div>
        </div>
      ))}
    </div>
  </div>
);
};
    

export default BodyHome;
