export function Bubble(props) {
  return <div
    className={props.className}
    style={{
      backgroundColor: '#BF8EA0',
      color: 'white',
      borderRadius: '0.75rem',
      padding: '20px',
      width: '100%',
      ...props.style
    }}
  >
    {props.children}
  </div>
}
