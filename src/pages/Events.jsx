import SectionTitle from '../components/SectionTitle'
import EventCard from '../components/EventCard'
import { events } from '../data/events'

export default function Events(){
  return (
    <main className="container page events-page">
      <SectionTitle title="Events" subtitle="Upcoming gatherings and community" />
      <div className="grid cols-2">
        {events.map(ev => <EventCard key={ev.id} event={ev} />)}
      </div>
    </main>
  )
}
