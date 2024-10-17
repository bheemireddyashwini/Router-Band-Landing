import React from "react";
import vocals from "../assets/Vocals.jpg";

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
const VocalImage = styled.img`
  width: 60%;
  height: 20%;
  margin-left:330px;
  object-fit: cover;
  animation: ${Increase} 3s ease-in-out infinite,
    ${hueRotate} 5s linear infinite;
`;

function Vocals() {
  return (
    <div>
      <VocalImage src={vocals} alt="Vocals" />
    </div>
  );
}

export default Vocals;
