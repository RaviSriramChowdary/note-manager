import React from "react";
import "../styles/Editor.css";

class Editor extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         newValue: this.props.content
      };
   }


   changeContent = (e) => {
      this.setState({newValue : e.target.value})
      this.props.change(e.target.value);
   };

   render() {
      return (
         <div className="w65 ibl p40 tac caps edit">
            Editor
            <textarea
               className="editArea w100"
               value={this.props.content}
               onChange={(e) => this.changeContent(e)}
            ></textarea>
         </div>
      );
   }
}

export default Editor;
