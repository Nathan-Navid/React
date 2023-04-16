import './App.css';
import PersonInfo from './Componentes/PersonInfo';

function App() {
  return (
    <div className="App">
      <PersonInfo
      firstName={"Jane"}
      lastName={"Doe"}
      age={45}
      hairColor={"Black"}
      />
      <PersonInfo
      firstName={"John"}
      lastName={"Smith"}
      age={88}
      hairColor={"Brown"}
      />
      
    </div>
  );
}

export default App;
