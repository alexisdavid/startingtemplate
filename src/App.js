import Routes from "./Routes";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>

      <Routes/>
    </HelmetProvider>
  );
}

export default App;
