import Seo from '../components/Seo'
import Hero from '../components/Hero'
import About from '../components/About'
import PracticeAreas from '../components/PracticeAreas'
import Team from '../components/Team'
import WhyUs from '../components/WhyUs'
import BlogPreview from '../components/BlogPreview'
import CtaBanner from '../components/CtaBanner'
import Contact from '../components/Contact'
import { firm } from '../data/content'
import { organizationSchema } from '../utils/schema'

export default function Home() {
  return (
    <>
      <Seo
        title={firm.defaultSeoTitle}
        description={firm.defaultSeoDescription}
        path="/"
        jsonLd={organizationSchema()}
      />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <WhyUs />
      <BlogPreview />
      <CtaBanner />
      <Contact />
    </>
  )
}
