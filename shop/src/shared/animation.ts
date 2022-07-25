import { keyframes } from '@chakra-ui/react'

export const glitch = keyframes`
  0% {
    background-position: 0 0;
    opacity:0.5;
  }
  10% {
    background-position: 10px 0;
    opacity:0.7;
  }
  20% {
    background-position: -10px 0;
    opacity:0.2;
  }
  30% {
    background-position: 5px 0;
    opacity:0.1;
  }
  40% {
    background-position: -5px 0;
    opacity:1;
  }
  50% {
    background-position: 10px 3px;
    opacity:0.5;
  }
  60% {
    background-position: -10px -3px;
    opacity:0.7;
  }
  70% {
    background-position: 0px -10px;
    opacity:1;
  }
  80% {
    background-position: 0px 10px;
    opacity:0.1;
  }
  81% {
    background-position: 0px 0px;
    opacity:0.8;
  }
  100% {
    background-position: 0px 0px;
    opacity:0.1;
  }
`
