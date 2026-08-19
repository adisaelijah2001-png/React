export default function SermonCard({ sermon }){
  return (
    <article className="card sermon-card">
      <h3>{sermon.title}</h3>
      <p className="meta">{sermon.speaker} • {sermon.date} • {sermon.category}</p>
      <div className="card-actions">
        <a className="btn" href={sermon.url || '#'}>Watch Sermon</a>
      </div>
    </article>
  )
}
