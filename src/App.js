import logo from './logo.svg';
import './App.css';

import TodoList from "./components/Todo";
import ThemeToggle from "./components/Theme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>Welcome To My TodoList!</code><br/>Made it Using React
        </p>

        <div>
          <p>Scroll Down!</p>
          <svg className='bounce' xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
          </svg>  
        </div>
      </header>

      <main className="App-content">
        <ThemeToggle />
          
        <TodoList />
      </main>
    </div>
  );
}

export default App;
