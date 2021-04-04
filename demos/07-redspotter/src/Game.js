export default function Game(props) {
  const { success, failure } = props;

  return (
    <div>
      <button onClick={success}>Win</button>
      <button onClick={failure}>Lose</button>
    </div>
  );
}


