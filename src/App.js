import { AppContainer } from './components/styled-components/AppStyles'

import AppRouter from './components/Router'

import { Footer } from './components/styled-components/Home-Styles'

function App() {
  return (
    <AppContainer>
      <AppRouter />
      <Footer>&#8482; Benjamin Governali</Footer>
    </AppContainer>
  );
}

export default App;
