import Navbar from "../navbar/page"
import HeroSection from "../layout/page"
import Footer from "../fotter/page"
import WhyChooseUs from "../skilpher/page"
import PopularCourses from "../data/page"

export default function layout({ children }) {
  return (
    <div>
     <Navbar></Navbar>
    <HeroSection></HeroSection>
    <WhyChooseUs></WhyChooseUs>
     <PopularCourses></PopularCourses>
      {children}
    <Footer></Footer>
    </div>
  )
}
