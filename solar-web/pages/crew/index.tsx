import { HeadText4, HeadText3, NormalText } from "../../styles/Typography";
import Layout from "../../template/layout/Layout";
import Image from "next/image";
import { CrewWrapper } from "../../styles/StyledCrew";
import data from "../../store/data.json";
import { useState } from "react";
import * as Img from "../../store/bgImg";

const Crew = ({ datas }: any) => {
  const [index, setIndex] = useState(0);
  const crew = datas[index];
  return (
    <Layout img={Img.CrewImg} text1="02" text2="Meet your crew">
      <CrewWrapper>
        <div className="content">
          <HeadText4 className="head-text" my="0.9375rem">
            {crew.role}
          </HeadText4>
          <HeadText3 className="head-name">{crew.name}</HeadText3>

          <NormalText className="normal-txt" color="color">
            {crew.bio}
          </NormalText>
          <div className="loader">
            {datas.map((data: any, i: any) => (
              <div
                className={`index ${index === i ? " " : "inactive"}`}
                key={`index-key-${i}`}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>
        </div>
        <div className="img">
          <Image
            src={crew.images.png}
            alt={crew.name}
            layout="fill"
            objectFit="contain"
            priority
            quality="50%"
          />
        </div>
      </CrewWrapper>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const datas = await data.crew;

  return {
    props: {
      datas,
    },
  };
};

export default Crew;
