import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../components/Home/Banner"
import Contact from "../components/Home/Contact"
import Footer from "../components/Home/Footer"
import NavBar from "../components/Home/NavBar"
import Projects from "../components/Home/Projects"
import Skills from "../components/Home/Skills"

const Home = () => {
    return(
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>

    )
}
export default Home()