import styled from "styled-components";
import signup from "./assets/images/signup.png";
import login from "./assets/images/login.png";

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-left: 90px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 500px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  display: table;
  top: 0;
  background-color: white;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  margin-top: 40px;
  margin-left: 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  text-align: right;
  width: 500px;
`;

export const Title = styled.div`
  color: #6596c8;
  font-size: 28px;
`;

export const TitleL = styled.div`
  color: #6596c8;
  font-size: 35px;
`;

export const ParagraphL = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const OverlayTitle = styled.div`
  color: white;
  font-size: 32px;
`;

export const OverlayParagraph = styled.div`
  color: white;
  text-align: left;
  font-size: 20px;
  margin-top: 20px;
`;

export const Input = styled.input`
  background-color: #eee;
  border: 1px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const FormInput = styled.input`
  background-color: #eee;
  border-bottom: 1px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #9e7889;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 80px;
  margin-left: 280px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled.button`
  background-color: transparent;
  border-color: #ffffff;
  color: white;
  margin-top: 50px;
`;

export const LoginGhostButton = styled.button`
  background-color: transparent;
  border-color: #9e7889;
  color: #9e7889;
  font-size: 10px;
  width: 250px;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

/********** Overlay component that redirect  you to signup page **********/

export const LeftOverlayPanel = styled(OverlayPanel)`
  background: linear-gradient(
      185.32deg,
      rgba(101, 150, 200, 0.9) 4.26%,
      rgba(101, 150, 200, 0.4) 95.74%
    ),
    url(${login});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

/********** Overlay component that redirect  you to signin  page **********/

export const RightOverlayPanel = styled(OverlayPanel)`
  background: linear-gradient(
      180deg,
      rgba(158, 120, 137, 0.9) 0%,
      rgba(195, 163, 177, 0.6) 100%
    ),
    url(${signup});
  background-repeat: no-repeat;
  background-size: cover;
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: black;
`;

export const CheckboxParagraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  margin: 20px 0 30px;
  display: flex;
  flex-direction: row;
`;

export const FormLabel = styled.p`
  text-align: left;
  margin: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-bottom: 10px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  padding-top: 20px;
`;

export const AgreeContainer = styled.div`
  margin-left: 90px;
  margin-top: 20px;
  color: black;
`;

export const SignupContent = styled.div`
  padding-left: 70px;
`;
