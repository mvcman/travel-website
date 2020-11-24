import React from "react"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

function Testimonials() {
  const data = useStaticQuery(
    graphql`
      query Testimonials {
        allFile(
          filter: {
            ext: { regex: "/(jpg)|(png)|(jpeg)/" }
            name: { in: ["testimonial-1", "testimonial-2"] }
          }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )
  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What people are asying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Micheal</h3>
            <p>"The greatest man on the earth"</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Micheal</h3>
            <p>"The greatest man on the earth"</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((t, i) => (
            <img
              key={i}
              src={t.node.publicURL}
              alt="testimonial"
              style={{ maxWidth: "100%", height: "100%", borderRadius: 10 }}
            />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    color: red;
  }

  p {
    color: #3b3b3b;
  }
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  height: 300px;
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
