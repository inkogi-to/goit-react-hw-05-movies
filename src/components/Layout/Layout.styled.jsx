import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  padding:0 15px;
  margin: 0 auto;

`
export const Header = styled.header`
  background-color: #b9b6b6;
`
export const List = styled.ul`
  display: flex;
  padding: 20px;

  li:not(:last-child){
    margin-right: 20px;
  }
`

export const NavLink = styled(Link)`
  font-weight: bold;
  font-size:20px;
  color: white;
  transition: color 250ms ease-in;

  :hover{
    color: saddlebrown;
  }
`
