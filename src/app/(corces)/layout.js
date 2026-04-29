import Navbar from "../navbar/page"
import Footer from "../fotter/page"

export default function layout({ children }) {
  return (
    <div>
    <Navbar></Navbar>
      {children}
    <Footer></Footer>
    </div>
  )
}
