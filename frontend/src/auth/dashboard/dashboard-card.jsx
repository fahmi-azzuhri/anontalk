import React from "react";
import styled from "styled-components";

const Card = ({ children, color }) => {
  return (
    <StyledWrapper color={color}>
      <div className="card">{children}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 100%;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    background-color: ${({ color }) =>
      color || "#3b82f6"}; /* Default ke biru */
  }

  .card:hover {
    transform: scale(1.1, 1.1);
  }
`;

export default Card;
