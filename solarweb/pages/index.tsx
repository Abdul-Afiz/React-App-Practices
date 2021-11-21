import type { NextPage } from "next";
import Explorebtn from "../components/atoms/explorebtn";
import Navbar from "../components/molecules/Navbar/navbar";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div>
        <Explorebtn />
      </div>
    </div>
  );
};

export default Home;
