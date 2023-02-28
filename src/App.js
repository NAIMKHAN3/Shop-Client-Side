import logo from './logo.svg';
import './App.css';
import Main from './Pages/Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
