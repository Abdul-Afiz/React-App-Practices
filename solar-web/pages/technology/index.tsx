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
import { TechWraper } from "../../styles/StyledTech";
import data from "../../store/data.json";
import * as Img from "../../store/bgImg";
import useScreenDimension from "../../config/util";

const Technology = ({ datas }: any) => {
  const [index, setindex] = useState(0);
  const tech = datas[index];
  const [width, height] = useScreenDimension();
  // console.log(width);
  return (
    <Layout img={Img.TechImg} text1="03" text2="space launch 101" pr="0">
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
            <Subheading3 my="0.6875rem" className="subhead">
              THE TERMINOLOGY…
            </Subheading3>
            <HeadText3 className="head-name"> {tech.name}</HeadText3>
            <NormalText className="normal-text" color="color">
              {tech.description}
            </NormalText>
          </div>
        </div>
        <div className="img">
          <Image
            src={width < 800 ? tech.images.landscape : tech.images.portrait}
            alt={tech.name}
            layout="fill"
            objectFit="cover"
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
