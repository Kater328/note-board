import React from "react";

function NewNote() {
    return (
      <form>
          <textarea name="new-note" />
          <button>Add</button>
      </form>
    );
  }
  
  export default NewNote;