/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";
import {
  HeadText3,
  HeadText4,
  NormalText,
  Subheading3,
} from "../../styles/Typography";
import Layout from "../../template/layout/Layout";
import { TechWraper } from "./StyledTech";
import data from "../../store/data.json";

const Technology = ({ datas }: any) => {
  const [index, setindex] = useState(0);
  const tech = datas[index];
  return (
    <Layout
      img="/assets/technology/background-technology-desktop.jpg"
      text1="03"
      text2="space launch 101"
      pr="0"
    >
      <TechWraper>
        <div className="content-wrapper">
          <div className="index-wrapper">
            {datas.map((data: any, i: number) => (
              <HeadText4
                key={`tech-key-${i}`}
                className={`index ${i === index ? "active" : ""}`}
                onClick={() => setindex(i)}
              >
                {i + 1}
              </HeadText4>
            ))}
          </div>
          <div className="content">
            <Subheading3 my="0.6875rem">THE TERMINOLOGY…</Subheading3>
            <HeadText3 className="head-name"> {tech.name}</HeadText3>
            <NormalText className="normal-text" color="color">
              {tech.description}
            </NormalText>
          </div>
        </div>
        <div className="img">
          <Image
            src={tech.images.portrait}
            alt={tech.name}
            layout="responsive"
            objectFit="cover"
            width={97}
            height={100}
            priority
          />
        </div>
      </TechWraper>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const datas = await data.technology;
  return {
    props: { datas },
  };
};

export default Technology;
