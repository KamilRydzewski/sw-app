import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
  from {
		-webkit-transform: translate3d(0px, 0px, 0px);
	}
	to { 
		-webkit-transform: translate3d(1000px, 0px, 0px);
	}
`;

const Twinkling = styled.div`
  width: 10000px;
  height: 100%;
  background: transparent
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png")
    repeat;
  background-size: 1000px 1000px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  -moz-animation: ${moveBackground} 70s linear infinite;
  -ms-animation: ${moveBackground} 70s linear infinite;
  -o-animation: ${moveBackground} 70s linear infinite;
  -webkit-animation: ${moveBackground} 70s linear infinite;
  animation: ${moveBackground} 70s linear infinite;
`;

export default Twinkling;
