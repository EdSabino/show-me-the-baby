export function Bubble(props) {
  return <div
    className={props.className}
    style={{
      backgroundColor: '#9DCA8C',
      color: 'white',
      borderRadius: '0.75rem',
      padding: '20px',
      width: '100%',
      borderColor: '#9DCA8C',
      ...props.style
    }}
  >
    {props.children}
  </div>
}
