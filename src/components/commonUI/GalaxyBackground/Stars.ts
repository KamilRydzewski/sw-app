import styled, { keyframes } from "styled-components";

const Star = styled.div`
  background: black
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png") repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: -2;
`;

export default Star;
