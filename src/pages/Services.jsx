import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

export default function Services(){
  return (
    <main className="container page services-page">
      <SectionTitle title="Services" subtitle="What to expect" />
      <div className="grid cols-2">
        <ServiceCard title="First Service" when="7:30 AM">Worship, teaching, and prayer.</ServiceCard>
        <ServiceCard title="Second Service" when="10:00 AM">Family-friendly worship and fellowship.</ServiceCard>
      </div>

      <SectionTitle title="Discipleship" />
      <p>Every Tuesday — opportunities to grow, ask questions, and build relationships.</p>
    </main>
  )
}
