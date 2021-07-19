import Home from './pages/Home';
import theme from './theme';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import store from './redux/estore';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  </div>
);

export default App;
