import React from "react";
import Inputfield from "./inputfield";
import Button from "./button";
function Card(props){

      return(
            <>
                  <div id="card"  className={`${props.id} ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>
                        <header className={`card-header-${props.id} ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`} id="card-header">
                              <h2 className="title">{props.title}</h2>
                              <div className="line"></div>
                        </header>
                        <div className='input-section'>
                              {props.inputs.map((input, index) => (
                                    <Inputfield
                                          key={index}
                                          type={input.type}
                                          placeholder={input.placeholder}
                                          icon={input.icon}
                                          id={input.id}
                                          isActive={props.isActive}
                                          isToggle={props.isToggle}
                                    />
                              ))}
                        </div>
                        <div id="btn-section"className={`btn-section-${props.id} ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>
                              <Button 
                                    name={props.button.name}
                                    class={props.button.id}
                              />
                        </div>

                  </div>

            </>

      );
}
export default Card