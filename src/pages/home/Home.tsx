import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Problem from '../../components/home/problem/Problem'
import Solution from '../../components/home/solution/Solution'
import Plans from '../../components/home/plans/Plans'
import HowItWorks from '../../components/home/howitworks/HowItWorks'
import Mission from '../../components/home/mission/Mission'
import Cta from '../../components/home/cta/Cta'

function Home() {
  return (
    <section className="bg-slate-50 text-slate-900 flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Plans />
      <HowItWorks />
      <Mission />
      <Cta />
    </section>
  );
}

export default Home