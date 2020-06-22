import React from "react";
import "../styles/Sidebar.css";
import Notemodules from "./Notemodules";

class Sidebar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         parentState: { ...this.props.state },
      };
   }

   addNote = () => {
      let newState = { ...this.props.state };
      newState.numNotes++;
      newState.Notes.push({ name: "Note " + newState.numNotes, value: "" });

      this.props.change(newState);
   };

   shiftEditor = (index) => {
      let newState = { ...this.props.state };
      newState.currentEditing = index;
      this.props.change(newState);
   };

   changeName = (newName,index) => {
      let newState = { ...this.props.state };
      newState.Notes[index].name = newName;

      this.props.change(newState);
   };

   render() {
      let notespanel = null;
      notespanel = this.state.parentState.Notes.map((Note, index) => {
         if (index === this.props.state.currentEditing)
            return (
               <Notemodules
                  click={this.shiftEditor}
                  change={this.changeName}
                  style={{ backgroundColor: "#fffccc" }}
                  name={Note.name}
                  index={index}
               ></Notemodules>
            );
         else
            return (
               <Notemodules
                  click={this.shiftEditor}
                  change={this.changeName}
                  style={{ backgroundColor: "#fffffc" }}
                  name={Note.name}
                  index={index}
               ></Notemodules>
            );
      });
      return (
         <div className="w35 ibl p50 caps tac">
            Your Notes
            <button
               className="w100 block bgtrans newnote"
               onClick={this.addNote}
            >
               + NEW NOTE
            </button>
            <div className=" sidebar">{notespanel}</div>
         </div>
      );
   }
}

export default Sidebar;
