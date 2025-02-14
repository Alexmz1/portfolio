import Header from "../components/header";
import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950"> 
      <Header />

      <About />

      <Project />

      <Contact />

      <Footer />
    </div>
  );
}
