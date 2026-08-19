import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import SermonCard from '../components/SermonCard'
import EventCard from '../components/EventCard'
import CTASection from '../components/CTASection'
import { sermons } from '../data/sermons'
import { events } from '../data/events'

export default function Home(){
  return (
    <main>
      <Hero />

      <section className="container services">
        <SectionTitle title="Sunday Services" subtitle="Join us this Sunday" />
        <div className="grid cols-2">
          <ServiceCard title="First Service" when="7:30 AM">A time of worship and teaching.</ServiceCard>
          <ServiceCard title="Second Service" when="10:00 AM">A vibrant service for families.</ServiceCard>
        </div>
        <div className="discipleship">
          <h3>Discipleship Program</h3>
          <p>Every Tuesday — Grow deeper in your faith.</p>
          <a className="btn" href="/discipleship">Learn About Discipleship</a>
        </div>
      </section>

      <section className="container sermons">
        <SectionTitle title="Recent Sermons" subtitle="Watch or listen to recent messages" />
        <div className="grid cols-3">
          {sermons.map(s => <SermonCard key={s.id} sermon={s} />)}
        </div>
      </section>

      <section className="container events">
        <SectionTitle title="Upcoming Events" subtitle="Join our community events" />
        <div className="grid cols-2">
          {events.map(ev => <EventCard key={ev.id} event={ev} />)}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
