import React,{useState} from 'react'
import logo from '../../assets/img/logo.svg'
const list = [
  "Pricing", "Product", "About Us", "Careers", "Community"
]

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false)
    console.log
    // const listRender=()=> {
    //   return (
    //     {list.map((li,i)=>{
    //       return<a href="" >{li}</a>
    //     })}
    //   )
    // }
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" className="hover:text-darkGrayishBlue">Community</a>
        </div>
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >Get Started</a>

        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${!navbarToggle ? "" : "open"}`}
          onClick={()=>setNavbarToggle(!navbarToggle)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${!navbarToggle ? "hidden" : "flex"}`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  )
}



export default Navbar