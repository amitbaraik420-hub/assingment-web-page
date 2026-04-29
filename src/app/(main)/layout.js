import Navbar from "../navbar/page"
import HeroSection from "../layout/page"
import Footer from "../fotter/page"

export default function layout({ children }) {
  return (
    <div>
     <Navbar></Navbar>
    <HeroSection></HeroSection>
      {children}
    <Footer></Footer>
    </div>
  )
}
