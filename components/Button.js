export function Button(props) {
  return <button
    type={props.type}
    onClick={props.onClick}
    className={'button ' + props.className}
    style={{
      backgroundColor: '#BF8EA0',
      color: 'white',
      borderRadius: '0.75rem',
      ...props.style
    }}
  >
    {props.children}
  </button>
}
