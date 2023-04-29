export function Bubble(props) {
  const error = props.error || false;

  return <div
    className={props.className}
    style={{
      backgroundColor: error ? '#CA8C8C' : '#9DCA8C',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '1rem',
      padding: '20px',
      width: '100%',
      borderColor: '#9DCA8C',
      ...props.style
    }}
  >
    {props.children}
  </div>
}
