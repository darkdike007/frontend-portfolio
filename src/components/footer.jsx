import { Footer } from "flowbite-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
export default function Footer1() {
  return (
    <>
      <Footer container={true} className={`mt-16 ${nunito.className}`}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <span className="self-center whitespace-nowrap text-xl font-bold text-slate-700 dark:text-white">
            My Portofolio
          </span>
            <Footer.LinkGroup className="font-semibold gap-3">
              <Footer.Link href="/">
                Home
              </Footer.Link>
              <Footer.Link href="/project">
                Project
              </Footer.Link>
              <Footer.Link href="/about-me">
                About Me
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="/"
            by="Hosea Dike"
            year={new Date().getFullYear()}
          />
        </div>
      </Footer>
    </>
  )

}