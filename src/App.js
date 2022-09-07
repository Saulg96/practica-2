//import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UserList from './components/UserList';

function App() {
  const itemList = [
    {number: 526, name: "Carlos", clasified: true, container: "container-1"},
    {number: 866, name: "Alex", clasified: true, container: "container-2"},
    {number: 940, name: "Sabrina", clasified: false, container: "container-3"},
    {number: 955, name: "Carmen", clasified: false, container: "container-4"},
    {number: 1053, name: "Esteban", clasified: true, container: "container-5"}
  ]
  return (
    <div className="App">
      <UserList />
      <br></br>
      {itemList.map((item,id) => {
        return (
          <User key={id} number={item.number} name={item.name} clasify={item.clasified} />
        )
      })}
    </div>
  );
}

export default App;
