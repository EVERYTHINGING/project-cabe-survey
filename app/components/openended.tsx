export default function Openended(props: { name: string, placeholder: string }) {
  return  <textarea name={props.name} placeholder={props.placeholder} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
}