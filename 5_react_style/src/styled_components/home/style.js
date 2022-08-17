import styled from "styled-components";

export const HomeWrapper =  styled.div`
/*  font-size: 50px;*/
  color: red;
  
  .banner {
    background-color: skyblue;
    
    span {
      color: white;
      //表示同时是span有active
      &.active {
        color: #f0f;
      }
      
      &:hover {
        color: green;
      }
      
      &::after {
        content: "aaa";
      }
    }
    
  }
`
export const TitleWrapper = styled.h2`
  text-decoration: underline;
`
