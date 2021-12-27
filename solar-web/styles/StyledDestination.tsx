import styled from "styled-components";

export const Wrapper = styled.main`
  .tab {
    display: flex;
    justify-content: flex-start;
    color: white;

    .active,
    .border {
      position: relative;
      cursor: pointer;
    }

    .active:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #ffffff;
      bottom: -0.2rem;
    }

    .border:hover:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #ffffff48;
      bottom: -0.2rem;
    }

    .planet {
      margin-right: 1rem;
    }
    .planet-text {
      font-size: 1rem;
    }
  }

  @media (max-width: 1380px) {
    .header {
      margin: 1.5rem 4rem;
    }
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2.5rem;

  .img {
    position: relative;
    width: 445px;
    height: 445px;
  }

  .line {
    width: 100%;
    height: 1px;
    background: #383b4b;
    margin: 3.375rem 0 1.75rem 0;
  }

  .distance {
    display: flex;
    column-gap: 4.9375rem;
    .subhead {
      margin: 0.75rem 0 0 0;
    }
  }

  @media (max-width: 1380px) {
    padding: 0 2.5rem;
    align-items: center;
    .img {
      width: 300px;
      height: 300px;
      margin-right: 2rem;
    }
    .main-text {
      font-size: 5rem;
      line-height: 1;
      margin: 1rem 0;
    }
    .subhead {
      font-size: 1.75rem;
    }
    .line {
      margin: 1rem 0;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem 0;
    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .img {
      margin-bottom: 3rem;
    }
    .tab {
      margin-bottom: 2rem;
    }
    .planet-text {
      margin-right: 1.25rem;
    }
    .main-text {
      margin-top: 0;
      margin-bottom: 0.5rem;
      line-height: 5.73rem;
    }
    .normal-text {
      max-width: 35.8125rem;
      line-height: 1.75rem;
    }
    .line {
      margin-top: 3.0625rem;
      margin-bottom: 1.75rem;
    }
  }
  @media (max-width: 575px) {
    .img {
      width: 170px;
      height: 170px;
      margin-bottom: 1rem;
    }
  }
`;
