import './App.css';
import Routes from './Router/Routes/Routes';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto">
      <Routes></Routes>
      <Toaster />
    </div>
  );
}
 
export default App;
