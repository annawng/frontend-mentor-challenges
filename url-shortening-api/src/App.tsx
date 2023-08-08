import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import LinkShortener from './components/LinkShortener';
import Features from './components/Features';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';
import { Main } from './styles/Main.styles';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Main>
          <Hero />
          <LinkShortener />
          <Features />
          <CallToAction />
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
