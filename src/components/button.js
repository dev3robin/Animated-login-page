function Button(props){
      return (
      <button  onClick={props.onClick} id="btn" className={props.class}>
            {props.name}
      </button>
      )
}

export default Button;