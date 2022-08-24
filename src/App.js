import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {

  const { users, isLoading } = useFetch();

  


  return (
    <div>
      <ul>
        {
          !isLoading ? 
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          }):
          (
            <li>Loading...</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
