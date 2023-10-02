import NavBar from './components/NavBar'
import PortfolioPage from './components/Hero'
import Aboutme from './components/aboutme'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className='  dark:bg-dark'>
    <NavBar />
    <PortfolioPage />
    <Aboutme />
    <Projects />
    <Contact />
    <Footer />
</div>
</>
)
}

export default App
