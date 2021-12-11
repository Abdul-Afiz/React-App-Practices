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
`;
