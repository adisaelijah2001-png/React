import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import SermonCard from '../components/SermonCard'
import { sermons as initial } from '../data/sermons'

export default function Sermons(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(initial.map(s => s.category)))]

  const filtered = initial.filter(s =>
    (category === 'All' || s.category === category) &&
    (s.title.toLowerCase().includes(query.toLowerCase()) || s.speaker.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <main className="container page sermons-page">
      <SectionTitle title="Sermons" subtitle="Search and filter messages" />
      <div className="search-row">
        <input placeholder="Search sermons" value={query} onChange={e => setQuery(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid cols-3">
        {filtered.map(s => <SermonCard key={s.id} sermon={s} />)}
      </div>
    </main>
  )
}
