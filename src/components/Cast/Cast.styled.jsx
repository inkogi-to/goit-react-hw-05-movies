import styled from "styled-components";
import {PersonFill} from '@styled-icons/bootstrap/PersonFill'

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap:30px;

`

export const ListItem = styled.li`
  max-width: 300px;

`
export const Img = styled.img`
  background-size: 100%;
  height: 300px;
`

export const Icon = styled(PersonFill)`
  width: 200px;
  height: 300px;
  color: grey;

`

