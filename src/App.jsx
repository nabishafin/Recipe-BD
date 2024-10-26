import Banner from "./components/Banner"
import Footer from "./components/Home/Footer"
import HomeContainer from "./components/Home/HomeContainer"
import Navbar from "./components/Navbar"
import Recipes from "./components/Recipes"


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <HomeContainer></HomeContainer>
      <Footer></Footer>
    </>
  )
}

export default App
