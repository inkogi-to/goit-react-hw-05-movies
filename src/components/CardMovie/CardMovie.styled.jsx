import styled from "styled-components";
import {Link} from "react-router-dom";

export const ToBack = styled(Link)`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #f68640;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding: 50px 0;

`
export const List = styled.ul`
  max-width: 600px
`
export const ListItem = styled.li`
  :nth-child(2){
    margin-top: 100px;
  }
:not(:last-child){
  margin-bottom: 30px;
}
`
export const Image = styled.img`
 width: 400px;
`
export const Title=styled.h1`
font-size: 40px;
`
