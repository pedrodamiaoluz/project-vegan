import styled from "styled-components";
import logo2 from "../../assets/logo2.jpg"

export const Container = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: 240px;
  z-index: 1; */
  display: flex;
  align-items: center;
  gap: 5rem;
  /* padding: 1rem 0 1rem 1rem; */
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Ul = styled.ul` 
   display: inline-block;
   list-style-type: none;
`
export const Li = styled.li`
    display: inline-block;
    padding: 0.5rem;
`
export const Image = styled.img`
    width: 100px;
    height: 100px;
    padding: 0.5rem;
`

export const A = styled.a` 
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: bold;
`

export const Inputs = styled.div` 
  background-color: #56C033;
  border-radius: 10px;
  display: flex;
  flex-direction:row-reverse;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.7rem;
  color: #fff;
  cursor: pointer;
`

export const Input = styled.input` 
   outline: none;
   padding: 0.7rem;
   border: 1px solid #569641; 
   border-radius: 10px;
   overflow: hidden;
   text-overflow: ellipsis;
`
export const Container_Input = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   color: #000;
`
export const Container_Icons = styled.div`
   /* background-color: #56C033; */
   background-image: url(${logo2});
   background-size: cover;
   background-position: center;
   width: 200px;
   height: 110px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-left: 20px;
   gap: 5px;
   color: #000;
   font-size: 1.2rem;

   a{
      text-decoration: none;
      color: #000;
   }

   .iconC{
      background-color: #fff;
      width: 40px;
      height: 40px;
      margin-left: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      padding: 5px;
   }
`