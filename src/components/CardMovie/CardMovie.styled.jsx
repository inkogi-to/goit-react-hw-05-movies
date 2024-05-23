import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ToBack = styled(Link)`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #f68640;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
`;
export const List = styled.ul`
  max-width: 600px;
`;
export const ListItem = styled.li`
  :nth-child(2) {
    margin-top: 100px;
  }
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const Image = styled.img`
  width: 400px;
`;
export const Title = styled.h1`
  font-size: 40px;
`;

export const DetailList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const DetailItems = styled.li`
  margin-top: 10px;
`;

export const Btn = styled(Link)`
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 19px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:after {
    background-clip: padding-box;
    background-color: #1CB0F6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:focus {
    user-select: auto;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);

  }
`;
// export const Review = styled(Link)`
//   padding: 5px;
//   background-color: red;
//   color: red;
// `;
