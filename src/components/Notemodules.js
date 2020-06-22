import React from 'react';


const Notemodules = (props) => {
   return (
      <input className="w95 noteHead" style={props.style} spellCheck="false" onClick={props.click.bind(this, props.index)} value={props.name} onChange={e => props.change(e.target.value,props.index)}/>
   );
}

export default Notemodules;