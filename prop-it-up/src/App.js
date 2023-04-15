import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName={"Jane"}
      lastName ={"Doe"}
      age ={45}
      hairColor ={"Black"}
      InitialNumber = {32}
      />
      <PersonCard
      firstName={"John"}
      lastName ={"Smith"}
      age ={88}
      hairColor ={"Brown"}
      InitialNumber = {21}
      />
      <PersonCard
      firstName={"Millard"}
      lastName ={"Fillmore"}
      age ={50}
      hairColor ={"Black"}
      InitialNumber = {16}
      />
        <PersonCard
      firstName={"Maria"}
      lastName ={"Smith"}
      age ={62}
      hairColor ={"Brown"}
      InitialNumber = {10}
      />
    </div>
  );
}

export default App;
