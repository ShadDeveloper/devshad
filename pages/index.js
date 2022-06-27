import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

function index() {
  return (
    <>
      <Head>
        <title>Dev Shad | The Web Developer</title>
      </Head>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default index