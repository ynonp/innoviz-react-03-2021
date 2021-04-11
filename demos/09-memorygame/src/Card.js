const cardStyle = {
  display: 'inline-block',
  width: '80px',
  height: '80px',
  textAlign: 'center',
  lineHeight: '80px',
  border: '1px solid',
  margin: '10px',
  verticalAlign: 'top',
};

export default function Card(props) {
  const { value, visible, onClick } = props;
  return <div
    onClick={onClick}
    style={cardStyle}>
    {visible ? value : " "}
  </div>
}

Card.defaultProps = {
  visible: false,
  onClick: () => { },
};

