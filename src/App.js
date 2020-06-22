import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import "./App.css";

class App extends React.Component {
   state = {
      numNotes: 1,
      Notes: [{ name: "Note 1", value: "" }],
      currentEditing: 0,
   };

   componentWillMount() {
      if (localStorage.getItem("Notes")) {
         this.setState({
            Notes: JSON.parse(localStorage.getItem("Notes")),
            numNotes: localStorage.getItem("NumNotes"),
            isLoading: false,
         });
      }
   }

   writeToEditor = (input) => {
      let copyState = { ...this.state };
      copyState.Notes[copyState.currentEditing].value = input;
      this.setState(copyState);
   };

   writeToSidebar = (newState) => {
      this.setState(newState);
   };

   // componentDidUpdate() {
   //    console.log(this.state.Notes[this.state.currentEditing].value);
   // }

   componentWillUpdate(nextProps, nextState) {
      localStorage.setItem("Notes", JSON.stringify(nextState.Notes));
      localStorage.setItem("NumNotes", nextState.numNotes);
   }

   render = () => {
      document.title =
         "Note Editor (" +
         this.state.Notes[this.state.currentEditing].name.toUpperCase() +
         ")";
      return (
         //Here goes the code that has to be returned.
         <div className="vh100 bggreen App">
            <h1 className="header">Note Editor</h1>
            <Sidebar state={this.state} change={this.writeToSidebar} />
            <Editor
               state={this.state}
               change={this.writeToEditor}
               content={this.state.Notes[this.state.currentEditing].value}
            />
         </div>
      );
   };
}

export default App;
