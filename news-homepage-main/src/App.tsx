import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Featured from './components/Featured';
import New from './components/New';
import Articles from './components/Articles';
import GlobalStyles from './styles/GlobalStyles';
import { HiddenH1 } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <main>
        <HiddenH1>W News</HiddenH1>
        <Featured />
        <New />
        <Articles />
      </main>
    </>
  );
}

export default App;
