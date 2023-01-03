import './App.css';
import Routes from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme/Theme';

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto">
      <ThemeProvider theme={theme}>
        <Routes></Routes>
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
