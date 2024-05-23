import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiMovieLine } from 'react-icons/ri';
export const Container = styled.div`
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
`;
export const Header = styled.header`
  background-color: #0a2f35;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: ;
`;
export const LogoMovie = styled(RiMovieLine)`
  fill: #f56038;
  margin-right: 5px;
`;
export const List = styled.ul`
  display: flex;
  padding: 20px;

  li:not(:last-child) {
    margin-right: 20px;
  }
`;
export const LogoLink = styled(Link)`
  padding: 0 20px;
  font-size: 30px;
  font-weight: bold;
  color: #f56038;
  display: flex;
  align-items: center;

`;

export const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  color: #f7a325;
  transition: color 250ms ease-in;

  :hover {
    color: #ffffff;
  }
`;
export const Loader = styled.div`
width: 100%;
height: 100%;
background-color: #000000;
opacity: 0.5;
transform: translate(-50%,-50%);
position: absolute;
top: 50%;
left: 50%;
  --w:10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  letter-spacing: var(--w);
  width:var(--w);
  overflow: hidden;
  white-space: nowrap;
  text-shadow:
    calc(-1*var(--w)) 0,
    calc(-2*var(--w)) 0,
    calc(-3*var(--w)) 0,
    calc(-4*var(--w)) 0,
    calc(-5*var(--w)) 0,
    calc(-6*var(--w)) 0,
    calc(-7*var(--w)) 0,
    calc(-8*var(--w)) 0,
    calc(-9*var(--w)) 0;
  animation: l16 2s infinite;
}
:before {
  content:"Loading...";
}
@keyframes l16 {
  20% {text-shadow:
    calc(-1*var(--w)) 0,
    calc(-2*var(--w)) 0 red,
    calc(-3*var(--w)) 0,
    calc(-4*var(--w)) 0 #ffa516,
    calc(-5*var(--w)) 0 #63fff4,
    calc(-6*var(--w)) 0,
    calc(-7*var(--w)) 0,
    calc(-8*var(--w)) 0 green,
    calc(-9*var(--w)) 0;}
  40% {text-shadow:
    calc(-1*var(--w)) 0,
    calc(-2*var(--w)) 0 red,
    calc(-3*var(--w)) 0 #e945e9,
    calc(-4*var(--w)) 0,
    calc(-5*var(--w)) 0 green,
    calc(-6*var(--w)) 0 orange,
    calc(-7*var(--w)) 0,
    calc(-8*var(--w)) 0 green,
    calc(-9*var(--w)) 0;}
  60% {text-shadow:
    calc(-1*var(--w)) 0 lightblue,
    calc(-2*var(--w)) 0,
    calc(-3*var(--w)) 0 #e945e9,
    calc(-4*var(--w)) 0,
    calc(-5*var(--w)) 0 green,
    calc(-6*var(--w)) 0,
    calc(-7*var(--w)) 0 yellow,
    calc(-8*var(--w)) 0 #ffa516,
    calc(-9*var(--w)) 0 red;}
  80% {text-shadow:
    calc(-1*var(--w)) 0 lightblue,
    calc(-2*var(--w)) 0 yellow,
    calc(-3*var(--w)) 0 #63fff4,
    calc(-4*var(--w)) 0 #ffa516,
    calc(-5*var(--w)) 0 red,
    calc(-6*var(--w)) 0,
    calc(-7*var(--w)) 0 grey,
    calc(-8*var(--w)) 0 #63fff4,
    calc(-9*var(--w)) 0 ;}

`;
