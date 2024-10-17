import drums from "../assets/Drums.avif";

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
transform: scale(60deg);
}
    60% {
    transform: scale(-200deg);
}
80% {
    transform: scale(-400deg);
}
100% {
    transform: scale(0deg);
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
const DrumImage = styled.img`
  width: 50%;
  height: 20%;
  margin-left: 500px;
  object-fit: cover;
  animation: ${Increase} 3s ease-in-out infinite,
    ${hueRotate} 5s linear infinite;
`;

function Drums() {
  return (
    <div>
      <DrumImage src={drums} alt="Vocals" />
    </div>
  );
}

export default Drums;
