import './assets/styles/custom.scss';
import './App.css';
import Catalog from 'pages/Catalog';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Catalog />
    </>
  )
};

export default App;
