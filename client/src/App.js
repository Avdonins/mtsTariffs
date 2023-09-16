import AppWrapper from './components/AppWrapper.jsx';
import MemoContent from './components/Content.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import useResize from './helpers/useResize.js';

function App() {
  const width = useResize();
  return (
    <>
      <AppWrapper width={width}>
        <Header />
        <MemoContent />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;