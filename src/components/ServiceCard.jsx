export default function ServiceCard({ title, when, children }){
  return (
    <article className="card service-card">
      <h3>{title}</h3>
      <p className="when">{when}</p>
      <p>{children}</p>
    </article>
  )
}
