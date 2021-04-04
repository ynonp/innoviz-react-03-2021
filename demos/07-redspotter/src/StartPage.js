export default function StartPage(props) {
  const { startGame } = props;

  return (
    <div>
      <p>Welcome To My Cool Game</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

