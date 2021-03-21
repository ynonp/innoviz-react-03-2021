import LightBulb from './lightbulb';
export default function App() {
  // emotion.js
  // styled components
  const style = {
    color: 'blue',
    fontSize: '24px',
  };

  return (
    <>
      <p style={style}>Bye bye</p>
      <p className="hello" />
      <p className={`hello`} />
      <LightBulb />
      <LightBulb />
      <LightBulb />
    </>
  );
}

