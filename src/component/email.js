import React from "react"
import styled from "styled-components"
import EmailBg from "../images/email2bg.jpg"
import { Button } from "./button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get access to exclusive offers</h1>
        <p>Sign Up for your first order to get $100 off on your first order</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: 40px;
                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
              `}
            >
              Sign Up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 1.5rem);
    padding: 0 1rem;
  }
  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
  form {
    z-index: 10;
  }
`

const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 40px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
