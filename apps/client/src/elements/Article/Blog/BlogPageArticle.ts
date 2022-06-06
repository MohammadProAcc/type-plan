import styled from "styled-components";
import { Article } from "./Article";

export const BlogPageArticle = styled(Article)`
height: 40vh;
width: 23vw;  
position: relative; 

&:first-child{
    grid-column: 1/3;
    width: 100%;
    /* height: 40vh; */
}`