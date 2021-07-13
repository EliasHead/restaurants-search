import Home from './pages/Home';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  </div>
);

export default App;
