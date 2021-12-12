import styled from "styled-components";

export const CrewWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img {
    position: relative;
    width: 35.5rem;
    height: 44.5rem;
  }
  .head-text {
    color: #ffffff80;
  }
  .head-name {
    margin-bottom: 1.6875rem;
  }
  .normal-txt {
    margin-bottom: 4rem;
  }
  .loader {
    margin-top: 3.5rem;
    display: flex;
    column-gap: 1.5rem;
  }

  .index {
    width: 0.9375rem;
    height: 0.9375rem;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
  .index:hover {
    opacity: 0.5;
  }
  .inactive {
    opacity: 0.17;
  }

  @media (max-width: 1380px) {
    margin-bottom: 0;
    align-items: center;
    .img {
      width: 20rem;
      height: 25rem;
    }
    .head-text {
      font-size: 1.5rem;
      margin: 0.3rem 0;
    }
    .head-name {
      margin-bottom: 0.5rem;
    }
    .normal-txt {
      margin-bottom: 1.5rem;
    }
    .loader {
      margin: 1.5rem 0;
    }
    .index {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;

    .content {
      text-align: center;
      display: grid;
      place-items: center;
    }
    .img {
      width: 28.52rem;
      height: 35rem;
    }
    .loader {
      margin: 2.5rem 0;
    }
    .head-name {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    .normal-txt {
      max-width: 28.625rem;
      margin-bottom: 0;
      line-height: 1.75rem;
    }
  }
`;
