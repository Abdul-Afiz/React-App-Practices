import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;

  button {
    height: 17.125rem;
    width: 17.125rem;
    background: white;
    color: ${(props) => props.theme.color.deepBlue};
    font-family: ${(props) => props.theme.fonts.bellefair};
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 2.3125;
    letter-spacing: 0.125rem;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.4s linear;
  }

  button:hover {
    box-shadow: 0px 0px 0px 60px #ffffff38;
  }

  @media (max-width: 1366px) {
    height: 80vh;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    .headtext {
      font-size: 7rem;
      margin: 0;
      line-height: 1.2;
    }
    .headtext5 {
      font-size: 1.2rem;
    }

    .home-button {
      width: 11rem;
      height: 11rem;
      font-size: 1.3rem;
    }
    button:hover {
      box-shadow: 0px 0px 0px 40px #ffffff38;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    .headtext {
      font-size: 9.375rem;
      margin: 1.5rem 0;
      line-height: 7.5rem;
    }
    .home-button {
      width: 15.125rem;
      height: 15.125rem;
      font-size: 2rem;
    }
    .text {
      margin: 0 auto;
      padding: 0;
      line-height: 1.75;
      max-width: 27.75rem;
    }
  }
  @media (max-width: 575px) {
    .headtext5 {
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.16875;
    }

    .headtext {
      font-size: 5rem;
      line-height: 6.25rem;
      margin: 1rem 0;
    }
    .text {
      font-size: 0.9375rem;
      line-height: 1.5625rem;
      max-width: 20.4375rem;
    }
    .home-button {
      width: 9.375rem;
      height: 9.375rem;
      font-size: 1.25rem;
      letter-spacing: 0.078125rem;
      line-height: 1.4325rem;
    }
  }
`;
