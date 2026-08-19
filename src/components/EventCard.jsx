export default function EventCard({ event }){
  return (
    <article className="card event-card">
      <img src={event.image} alt={event.title} />
      <div className="event-body">
        <h3>{event.title}</h3>
        <p className="meta">{event.date} • {event.time}</p>
        <p>{event.description}</p>
        <div className="card-actions">
          <a className="btn" href="#">View Event</a>
        </div>
      </div>
    </article>
  )
}
