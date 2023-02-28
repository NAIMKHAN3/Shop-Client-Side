
import './App.css';
import Main from './Pages/Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
