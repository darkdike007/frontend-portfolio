import { Navbar } from "flowbite-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });


export default function NavbarMenu() {

  return (
    
    
    <>
      <Navbar fluid={true} className={`w-full py-5 text-slate-700 ${nunito.className}`}>
        <Navbar.Brand href="/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            My Portofolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            className="text-base font-bold text-slate-600"
            href="/"
            
          >
            Home
          </Navbar.Link>
          <Navbar.Link className="text-base font-bold text-slate-600" href="/project">
            Project
          </Navbar.Link>
          <Navbar.Link className="text-base font-bold text-slate-600" href="/about-me">
            About Me
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      
    </>
  );
}
