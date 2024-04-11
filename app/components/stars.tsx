import { useState } from "react"

export default function Stars(props: any) {
  const [rating, setRating] = useState('1')

  function onOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRating(e.target.value)
  }

  return (
    <div className="my-6 rating rating-lg">
      <input 
        type="radio" 
        name={props.name} 
        value="1" 
        checked={rating === "1"} 
        onChange={onOptionChange}
        className="mask mask-star-2 bg-orange-400"
      />
      <input 
        type="radio" 
        name={props.name} 
        value="2" 
        checked={rating === "2"} 
        onChange={onOptionChange}
        className="mask mask-star-2 bg-orange-400"
      />
      <input 
        type="radio" 
        name={props.name} 
        value="3" 
        checked={rating === "3"} 
        onChange={onOptionChange}
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  )
}