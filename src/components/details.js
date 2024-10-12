import Button from "./button"
import {React} from 'react';
function DetailsCard(props){
      function handleClick() {
            if (props.btn_class ==="ln"){
                  props.toggleBackground();
            } else if( props.btn_class === "su"){
                  props.animation();
            } 
      }
      return (
            <>
                  <div id="details_card_div"  className={`${props.id} ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>
                        <h1 className={`${props.id}-h1 ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>{props.title}</h1>
                        <p className={`${props.id}-p ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>
                              {props.text}
                        </p>
                        <div className={`${props.id}-button ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>
                              <Button  onClick={handleClick} name={props.btn_text}class={props.btn_class}/>
                        </div>
                  </div>
            </>
      )
}
export default DetailsCard