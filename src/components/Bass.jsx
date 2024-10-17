import bass from "../assets/Bass.jpeg";

import React from "react";
import styled, { keyframes } from "styled-components";

const Increase = keyframes`
0% {
    transform: scale(0%);
}
20% {
}
    transform: scale(10%);

}
40% {
transform: skew(60deg);
}
    60% {
    transform: skew(-200deg);
}
80% {
    transform: skew(-400deg);
}
100% {
    transform: skew(0deg);
}
`;
const hueRotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(180deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;
const BassImage = styled.img`
  width: 50%;
  height: 20%;
  margin-left:470px;
  object-fit: cover;
  animation: ${Increase} 3s ease-in-out infinite,
    ${hueRotate} 5s linear infinite;
`;

function Bass() {
  return (
    <div>
      <BassImage src={bass} alt="bass" />
    </div>
  );
}

export default Bass;
