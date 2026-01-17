import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import SummaryHeader from './components/SummaryHeader';


function App() {

  return (
    <div className='main-container'>
      <SummaryHeader />
      <Highlights />
      <Experience />
      <AboutMe />
    </div>
  )
}

export default App
