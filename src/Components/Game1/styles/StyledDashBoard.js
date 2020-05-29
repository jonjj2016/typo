import styled from 'styled-components';

export const StyledDashBoard = styled.div `
  width: 100%;
  height: 90vh;
  background-color: #eee;
  /* display: flex;
  align-items: center; */
  position: relative;
  overflow: hidden;
`;
export const Span = styled.span `

  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 2rem;
  color: #eee;
  border-radius: 50%;
  margin-left: 3rem;
  display:${(props) => (props.disp ? setTimeout(() => 'block', props.index ? props.index * 1000 : 1000) : 'none')};
  /* opacity: ${(props) => (props.blow ? 0 : 1)}; */
  background-color: rgb(49, 145, 231);
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
  /* box-shadow: inset -63px -38px 72px 0px rgba(0, 0, 0, 0.25); */
  background-image: linear-gradient(-45deg, rgba(255, 255, 220, 0.3) 0%, transparent 100%);
`;
export const Wrapper = styled.div `
display:flex;
width:80%;
flex-direction:column;
/* position:absolute; */
/* top:${(props) => props.top} */
`;
export const Word = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction:column-reverse; */
  width: 100%;
  ${(props) =>
    props.reset &&
    `
animation: animationFrames linear 8s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;

  @keyframes animationFrames {
    0% {
      transform: translate(-28px, -251px);
    }
    0% {
      transform: translate(-28px, -251px);
    }
    1% {
      transform: translate(-27px, -252px);
    }
    100% {
      transform: translate(-13px, 900px);
      display: none;
    }
  }

`}
`;