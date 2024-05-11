import styled from "styled-components";

export const LoginMainWrapper = styled.div`
    display: flex;
    width: 1728px;
    height: 1117px;
    background-image: linear-gradient(rgba(223, 5, 249, 0.04));
`;

export const LeftWrapper = styled.div`
    width: 727px;
`;

export const RightWrapper = styled.div`
    flex: 1;
    /* height: 900px; */
    background-color: rgba(255, 255, 255, 1);
`;

export const FormWrapper = styled.div`
    width: 650px;
    margin-left: 158px;
    /* margin-right: auto; */
    margin-top: 315px;
    border-radius: 40px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    padding: 65px 75px;
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        width: 100%;
        height: 60px;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px 12px;
        margin-bottom: 20px;
        background-color: rgba(246, 247, 249, 1);
        padding-left: 60px;
    }
    input::placeholder{
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 500;
        color: rgba(181, 189, 200, 1);
        line-height: 24px;
    }
    .inputbox{
        display: flex;
        position: relative;
    }
    .icons{
        display: flex;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 20px 10px;
    /* padding: 10px; */
    border-radius: 12px;
    border: 1px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 1);
    }
    .eye{
        display: flex;
    position: absolute;
    right: 10px;
    padding: 17px 17px;
    margin-top: 10px;
    }
    .forgot {
    font-family: sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    background: linear-gradient(rgba(255, 49, 204, 1), rgba(221, 2, 253, 1));
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    text-align: right;
}
.loginbutton{
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-family: sans-serif;
    line-height: 20px;

    width: 100%;
    border-radius: 12px;
    height: 60px;
    background: linear-gradient(rgba(255, 49, 204, 1),rgba(221, 2, 253, 1));
}
`;

export const LoginText = styled.div`
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    /* text-align: center; */
    margin: 5px;
    padding-bottom: 12px;
    color: rgba(12, 20, 33, 1);
`