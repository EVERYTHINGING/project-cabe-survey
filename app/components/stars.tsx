import { useState } from "react"

export default function Stars(props: {num: number, name: string, default: string}) {
  const [rating, setRating] = useState(props.default)

  function onOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRating(e.target.value)
  }

  return (
    <div className="my-6 rating rating-lg">
      {Array(props.num).fill(1).map((el, i) => (
        <input
          key={i+1}
          type="radio"
          name={props.name}
          value={(i+1).toString()}
          checked={rating === (i+1).toString()}
          onChange={onOptionChange}
          className="mask mask-star-2 bg-orange-400"
        />
      ))}
      
    </div>
  )
}