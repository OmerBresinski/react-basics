export default function ButtonElement(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <button onClick={props.onClick}>Click {props.value}</button>
    </div>
  );
}
