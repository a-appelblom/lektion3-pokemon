export default function Wrapper(props) {
  console.log(props.children);
  return <div>{props.children}</div>;
}
