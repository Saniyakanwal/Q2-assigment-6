import Achivements from "@/components/achivements";
import Companies from "@/components/companies";
import Courses from "@/components/courses";
import CoursesCategory from "@/components/courses category";
import CustomerTest from "@/components/customertest";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/team";

export default function(){
  return(
    <div>
       <Header/>
       <Navbar/>
       <Hero/>
       <Companies/>
       <CoursesCategory/>
       <Achivements/>
       <Courses/>
       <Team/>
       <CustomerTest/>
       <Footer/>
    </div>
  )
}