import Navbar from './components/Navbar/Component'
import Footer from './components/Footer/Component'

//PAGES
import Dashboard from './pages/Dashoard';

function App() {
  const style = {
    foot :{
          position: 'absolute',
          width: '100%',
          bottom: 0
    }
  }
  return (
    <div className="App">
      <div className="head">
        <Navbar/> 
      </div>
      <div className="content m-5">
          <Dashboard/>
      </div>
      <div className="foot">
        <Footer />          
      </div>
    </div>
  );
}

export default App;
