import styled from "styled-components";

export const LayoutWrapper = styled.main<{ bg: string }>`
  height: 100vh;
  overflow-y: hidden;
  background: ${(props) =>
    `url(${props.bg || "/assets/home/background-home-desktop.jpg"})`};
  background-size: cover;
  .center {
    margin: 0 auto;
    max-width: 1440px;
  }
  .header {
    margin: 0 auto;
    max-width: 75%;
    margin-top: 3rem;
    @media (max-width: 1380px) {
      margin-top: 2rem;
    }
  }
  @media (max-width: 800px) {
    background: ${(props) =>
      `url(${props.bg || "/assets/home/background-home-tablet.jpg"})`};
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export const NavWrapper = styled.div`
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 29.5625rem;
    height: 1px;
    background: white;
    opacity: 0.25;
    left: 11rem;
    z-index: 1;
  }
  .imgWrapper {
    position: relative;
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 1366px) {
    &:before {
      width: 27rem;
      left: 9rem;
    }
  }

  @media (max-width: 1363px) {
    &:before {
      width: 25rem;
    }
  }

  @media (max-width: 1260px) {
    &:before {
      width: 19rem;
    }
  }

  @media (max-width: 1168px) {
    &:before {
      width: 0;
    }
  }
  @media (max-width: 800px) {
    padding-top: 0;
  }
`;

export const ChildrenWrapper = styled.main<{ pr?: string }>`
  padding: 2rem 7rem;
  padding-right: ${(props) => props.pr};
  @media (max-width: 1380px) {
    padding: 0rem 7rem;
  }
  @media (max-width: 1200px) {
    padding: 0 2rem;
  }
  @media (max-width: 800px) {
    padding: 2rem 0;
  }
`;
