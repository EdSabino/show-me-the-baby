export function Button(props) {
  return <button
    type={props.type}
    onClick={props.onClick}
    className={'button ' + props.className}
    style={{
      backgroundColor: '#D8909C',
      color: 'white',
      borderRadius: '0.75rem',
      ...props.style
    }}
  >
    {props.children}
  </button>
}
