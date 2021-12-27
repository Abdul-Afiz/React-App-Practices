import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  .no {
    color: white;
    opacity: 0.25;
    margin-right: 1.75rem;
  }
  .header-txt {
    color: white;
  }

  @media (max-width: 1380px) {
    .no,
    .header-txt {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
  }

    @media (max-width: 575px) {
      justify-content: center;
    .no,
    .header-txt {
      margin: 0;
      font-size: 1rem;
    }
    .no{
      margin-right: 1.125rem;
    }
`;
