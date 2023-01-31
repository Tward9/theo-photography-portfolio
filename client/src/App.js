import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const callBackEnd = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
