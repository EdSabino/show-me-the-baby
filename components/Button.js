export function Button(props) {
  const error = props.error || false;

  return <button
    type={props.type}
    onClick={props.onClick}
    className={'button ' + props.className}
    disabled={props.disabled || false}
    style={{
      backgroundColor: error ? '#BF8EA0' : '#9DCA8C',
      color: 'white',
      borderRadius: '0.75rem',
      borderColor: '#9DCA8C',
      ...props.style
    }}
  >
    {props.children}
  </button>
}
