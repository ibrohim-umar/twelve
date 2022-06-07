import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 50px;
`
export const Left = styled.div`
width: 310px;
background: #fbfbfb;
margin-left: 20px;


`
export const Right = styled.div`
display: flex;
flex: 1;
background: #fff;
`
export const Wrapper = styled(NavLink)`
display: flex;
justify-content: space-between;
text-decoration: none;
color: black;
:hover{
    color: brown;
}
`
export const Title = styled.div`
font-size: 16px;
line-height: 16px;
margin-bottom: 25px;
color: inherit;

`