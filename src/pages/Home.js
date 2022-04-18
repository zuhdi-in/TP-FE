import Footer from "../components/Footer";
import { useState } from "react";
import CovidForm from "../components/CovidForm";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinces from "../components/Provinces";
import data from "../utils/constants/provinces";

function Main() {
  const [patients, setPatients] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <Global />
      <Provinces patients={patients} setPatients={setPatients}/>
      <CovidForm patients={patients} setPatients={setPatients}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
