export default function Hero(){
  return (
    <section className="hero" style={{backgroundImage: `url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1600&q=80&auto=format&fit=crop')`}}>
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1>Welcome to The Covenant Nation, Jesutedo</h1>
          <p>A place to grow in faith, build meaningful relationships, and discover God's purpose for your life.</p>
          <div className="hero-actions">
            <a href="/plan-visit" className="btn primary">Plan Your Visit</a>
            <a href="/about" className="btn">Explore Our Church</a>
          </div>
        </div>
      </div>
    </section>
  )
}
