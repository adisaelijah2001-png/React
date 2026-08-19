import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'

export default function About(){
  return (
    <main className="container page about-page">
      <SectionTitle title="Who We Are" subtitle="A welcoming community of faith" />
      <p className="lead">The Covenant Nation, Jesutedo is a community where people can worship God, grow spiritually, connect with others, and serve. This page contains editable placeholder content.</p>

      <SectionTitle title="Our Vision" />
      <p>Our vision is to see lives transformed by the gospel. (Placeholder text.)</p>

      <SectionTitle title="Our Mission" />
      <p>Our mission is to love God, love people, and make disciples. (Placeholder text.)</p>

      <SectionTitle title="Our Community" />
      <p>We value fellowship, spiritual growth, discipleship, worship, and serving others.</p>

      <a className="btn primary" href="/plan-visit">Attend a Service</a>

      <CTASection />
    </main>
  )
}
