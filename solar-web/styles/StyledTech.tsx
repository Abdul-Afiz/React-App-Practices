import styled from "styled-components";

export const TechWraper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* overflow-y: auto; */
  .content-wrapper {
    display: flex;
    align-items: center;
  }
  .index-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    .index {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-top: 2rem;
      border: 1px solid #ffffff33;
      line-height: 5rem;
      text-align: center;
      cursor: pointer;
    }

    .index:hover {
      border: 1px solid #ffffff;
    }

    .active {
      color: ${(props) => props.theme.color.deepBlue};
      background: #ffffff;
      border: none;
    }
    @media (max-width: 1380px) {
      margin: 0 2rem;
      .index {
        margin-top: 1rem;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.3rem;
      }
    }
  }
  .content {
    .head-text3 {
      margin-bottom: 0.5rem;
    }
  }
  .img {
    position: relative;
    width: 32.1875rem;
    height: 32.9375rem;
  }
  .head-name {
    margin-bottom: 1rem;
  }

  @media (max-width: 1380px) {
    align-items: center;

    .img {
      width: 20rem;
      height: 20rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    text-align: center;
    .img {
      width: 100%;
      /* height: 19.375rem; */
    }
    .content-wrapper {
      margin-top: 3.5rem;
      flex-direction: column;
    }
    .content {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
    .head-name,
    .subhead {
      margin-bottom: 0rem;
    }
    .index-wrapper {
      flex-direction: row;
      column-gap: 1rem;
      margin-bottom: 1rem;
      .index {
        margin: 0;
      }
    }
    .normal-text {
      max-width: 26.625rem;
      line-height: 1.75rem;
    }
  }
`;
