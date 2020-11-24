import React from "react"
import Layout from "../component/layout"
import Hero from "../component/hero"
import Trips from "../component/trips"
import Testimonials from "../component/testimonials"
import Stats from "../component/stats"
import Email from "../component/email"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Trips heading="Our Favourite destination" />
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  )
}
