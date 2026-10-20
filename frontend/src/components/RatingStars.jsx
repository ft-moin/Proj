export default function RatingStars({ value, onChange }) {
  return <div className="stars" role="radiogroup" aria-label="Rating">
    {[1,2,3,4,5].map(n => <button type="button" key={n}
      className={n <= value ? 'star active' : 'star'} aria-label={`${n} star${n > 1 ? 's' : ''}`}
      aria-checked={value === n} role="radio" onClick={() => onChange(n)}>★</button>)}
  </div>;
}
