import styled from "styled-components";

export const HeadText = styled.h1<{
  text?: string;
  my?: string;
  fontweight?: string;
}>`
  font-size: ${(props) => props.text || "9.375rem"};
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-weight: ${(props) => props.fontweight || "100"};
  line-height: 10.75rem;
  color: white;
  text-transform: uppercase;
  margin: ${(props) => props.my || "0"} 0;
`;

export const HeadText2 = styled(HeadText)`
  font-size: 6.25rem;
  line-height: 7.1875rem;
`;

export const HeadText3 = styled(HeadText)`
  font-size: 3.5rem;
  line-height: 4rem;
  @media (max-width: 1380px) {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 0.5rem;
  }
`;

export const HeadText4 = styled(HeadText)`
  font-size: 2rem;
  line-height: 2.3125rem;
`;

export const HeadText5 = styled(HeadText4)`
  line-height: 2.1rem;
  font-family: ${(props) => props.theme.fonts.barlowCondensed};
  color: ${(props) => props.theme.color.lightBlue};
  font-size: 1.75rem;
  letter-spacing: 0.2953125rem;
`;

export const Subheading = styled(HeadText)`
  font-size: 1.75rem;
  line-height: 2rem;
`;

export const Subheading2 = styled(HeadText5)`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.1476562rem;
`;

export const Subheading3 = styled(HeadText5)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.16875rem;
`;

export const NormalText = styled.p<{
  fontsize?: string;
  my?: string;
  color?: string;
}>`
  font-family: ${(props) => props.theme.fonts.barlow};
  font-size: ${(props) => props.fontsize || "1.125rem"};
  line-height: 2rem;
  color: ${(props) =>
    props.color === "color" ? props.theme.color.lightBlue : "white"};
  max-width: 27.75rem;
  margin: ${(props) => props.my || "0"} 0;
  @media (max-width: 1380px) {
    font-size: 1rem;
    line-height: 1.3;
    max-width: 24rem;
  }
`;
