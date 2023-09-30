import NavBar from './components/NavBar'
import PortfolioPage from './components/Hero'
import Aboutme from './components/aboutme'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {


  return (
    <>
    <div className='dark:bg-gray-900'>
    <NavBar />
    <PortfolioPage />
    <Aboutme />
    <Projects />
    <Contact />
</div>
</>
)
}

export default App
