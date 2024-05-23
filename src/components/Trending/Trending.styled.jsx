import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

export const Main = styled.main`
  background-color: #fffcfc;
`;
export const Title = styled.h1`
  font-weight: bold;
  padding: 40px 20px 0 20px;
  color: #f56038;
`;
export const List = styled.ul`
  margin-top: 20px;
  padding: 50px 20px 50px 20px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  position: relative;
  font-size: 25px;
  font-weight: bold;

  span {
    position: absolute;
    top: -9px;
    right: -24px;
    font-size: 12px;
    background-color: #f7a325;
    opacity: 0;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    transition: opacity 250ms linear;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  max-width: 800px;
  color: #12492f;
  transition: background-color 250ms linear;


  :hover {
    color: #0a2f35;
    background-color: #f7a325;
    border-radius: 10px;
    width: 10px;
  }
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :hover li > span {
    opacity: 1;
  }
`;
export const Icon = styled(FcFilmReel)`
  height: 30px;
  width: 30px;
`;
