import { useState } from "react"

export default function Scale(props: { name: string, options: string[] }) {
  const [scaleAmount, setScaleAmount] = useState('');

  function onOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setScaleAmount(e.target.value);
  }

  return (
    <div className="my-6">
        {props.options.map((option :string, i :number) => (
            <div key={`${props.name}-${i}`}  className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">{option}</span> 
                    <input 
                        type="radio" 
                        name={props.name} 
                        value={option}
                        checked={scaleAmount === option}
                        onChange={onOptionChange}
                        className="radio checked:bg-blue-500"
                    />
                </label>
            </div>
        ))}
    </div>
  )
}