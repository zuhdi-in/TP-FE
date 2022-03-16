// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


/**
 * Membuat component App.
 * Component utama yang menampung components lain.
 */
 function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
