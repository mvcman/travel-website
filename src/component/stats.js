import React from "react"
import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const StatdData = [
  {
    icons: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 Destination",
    desc: "Travel to over 100 uniquer places",
  },
  {
    icons: (
      <MdAirplanemodeActive
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 Destination",
    desc: "Travel to over 100 uniquer places",
  },
  {
    icons: (
      <MdTimer
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 Destination",
    desc: "Travel to over 100 uniquer places",
  },
  {
    icons: (
      <FaMoneyCheck
        css={`
          color: #3af756;
        `}
      />
    ),
    title: "Over 100 Destination",
    desc: "Travel to over 100 uniquer places",
  },
]
const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why choose Us?</Heading>
      <Wrapper>
        {StatdData.map((d, i) => {
          return (
            <StatBox key={i}>
              <Icon>{d.icons}</Icon>
              <Title>{d.title}</Title>
              <Description>{d.desc}</Description>
            </StatBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 0.5rem;
`
