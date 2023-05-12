import styled from "styled-components";
import {Link} from "react-router-dom";



export const Main = styled.main`
  background-color: rgba(255, 255, 255, 0.37);
`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  padding: 40px 20px 0 20px;
  color: #f17854;
`
export const List = styled.ul`
  margin-top: 20px;
  padding: 50px 20px 50px 20px;
`
export const ListItem = styled.li`
  font-size: 20px;
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
  border-radius: 10px;
  transition: background-color 250ms linear;


  :not(:last-child) {
    margin-bottom: 10px;

    :hover {
      background-color: #dc9e9e;
    }
  }

  a {
    margin-left: 5px;
  }
`
export const NavLink = styled(Link)`
  color: #27716e;
  transition: color 250ms linear;

  :hover {
    color: #383834;
  }
`
export const Span = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 350px;
  padding: 5px;
  background-color: orange;
  border-radius: 10px;
  font-size: 16px;
`

