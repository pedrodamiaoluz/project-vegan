import styled from 'styled-components';

export const StyledWrapper = styled.div`

.card_container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;  
    padding: 20px 0.5rem;
}
  /* before adding the img to the div with the 
  "card-img" class, remove css styles 
  .card-img .img::before and .card-img .img::after,
  then set the desired styles for .card-img. */
  .card {
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    --main-focus: #2d8cf0;
    width: 210px;
    height: 300px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    border-radius: 5px;
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    gap: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card:last-child {
    justify-content: flex-end;
  }

  // .card-img {
  //     /* clear and add new css */
  //   transition: all 0.5s;
  //   display: flex;
  //   justify-content: center;
  // }

.imgs{
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100px;
    height: 100px;
  }
}
  // .img {
  //  /* delete */
  //   transform: scale(1);
  //   position: relative;
  //   box-sizing: border-box;
  //   width: 100px;
  //   height: 100px;
  //   border-top-left-radius: 80px 50px;
  //   border-top-right-radius: 80px 50px;
  //   border: 2px solid black;
  //   background-color: #228b22;
  //   background-image: linear-gradient(to top,transparent 10px,rgba(0,0,0,0.3) 10px,rgba(0,0,0,0.3) 13px,transparent 13px);
  // }

  // .img::before {
  //  /* delete */
  //   content: '';
  //   position: absolute;
  //   width: 65px;
  //   height: 110px;
  //   margin-left: -32.5px;
  //   left: 50%;
  //   bottom: -4px;
  //   background-repeat: no-repeat;
  //   background-image: radial-gradient(ellipse at center,rgba(0,0,0,0.7) 30%,transparent 30%),linear-gradient(to top,transparent 17px,rgba(0,0,0,0.3) 17px,rgba(0,0,0,0.3) 20px,transparent 20px),linear-gradient(to right,black 2px,transparent 2px),linear-gradient(to left,black 2px,transparent 2px),linear-gradient(to top,black 2px,#228b22 2px);
  //   background-size: 60% 10%,100% 100%,100% 65%,100% 65%,100% 50%;
  //   background-position: center 3px,center bottom,center bottom,center bottom,center bottom;
  //   border-radius: 0 0 4px 4px;
  //   z-index: 2;
  // }

  // .img::after {
  //  /* delete */
  //   content: '';
  //   position: absolute;
  //   box-sizing: border-box;
  //   width: 28px;
  //   height: 28px;
  //   margin-left: -14px;
  //   left: 50%;
  //   top: -13px;
  //   background-repeat: no-repeat;
  //   background-image: linear-gradient(80deg,#ffc0cb 45%,transparent 45%),linear-gradient(-175deg,#ffc0cb 45%,transparent 45%),linear-gradient(80deg,rgba(0,0,0,0.2) 51%,rgba(0,0,0,0) 51%),linear-gradient(-175deg,rgba(0,0,0,0.2) 51%,rgba(0,0,0,0) 51%),radial-gradient(circle at center,#ffa6b6 45%,rgba(0,0,0,0.2) 45%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(45deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(65deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(22deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 54%,rgba(0,0,0,0) 54%);
  //   background-size: 100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 75%,100% 95%,100% 60%;
  //   background-position: center center;
  //   border-top-left-radius: 120px;
  //   border-top-right-radius: 10px;
  //   border-bottom-left-radius: 10px;
  //   border-bottom-right-radius: 70px;
  //   border-top: 2px solid black;
  //   border-left: 2px solid black;
  //   transform: rotate(45deg);
  //   z-index: 1;
  // }

  .card-title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: var(--font-color);
  }

  .card-subtitle {
    font-size: 14px;
    font-weight: 400;
    color: var(--font-color-sub);
  }

  .card-divider {
    width: 100%;
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card-price {
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color);
  }

  .card-price span {
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color-sub);
  }

  .card-btn {
    height: 35px;
    background: var(--bg-color);
    border: 2px solid #4EEA18;
    border-radius: 5px;
    padding: 0 15px;
    transition: all 0.3s;
  }

  .card-btn svg {
    width: 100%;
    height: 100%;
    fill: #4EEA18;
    transition: all 0.3s;
  }

  .card-img:hover {
    transform: translateY(-3px);
  }

  .card-btn:hover {
    border: 2px solid var(--main-focus);
  }

  .card-btn:hover svg {
    fill: var(--main-focus);
  }

  .card-btn:active {
    transform: translateY(3px);
  }
  `
