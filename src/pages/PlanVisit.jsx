import SectionTitle from '../components/SectionTitle'

export default function PlanVisit(){
  return (
    <main className="container page plan-page">
      <SectionTitle title="Plan Your Visit" subtitle="What to expect" />
      <h3>When We Meet</h3>
      <p>Sunday: 7:30 AM &amp; 10:00 AM</p>
      <p>Tuesday: Discipleship</p>

      <h3>Where We Are</h3>
      <p>In front of Lagos Business School, Sangotedo, Lagos State, Nigeria</p>

      <h3>What To Expect</h3>
      <ul>
        <li>Worship</li>
        <li>Biblical teaching</li>
        <li>Prayer &amp; fellowship</li>
      </ul>

      <a className="btn primary" href="/contact">Get Directions</a>
    </main>
  )
}
