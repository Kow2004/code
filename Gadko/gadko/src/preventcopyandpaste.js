const Preventcopypaste=()=>{
    const handlePaste = (e) => {
        e.preventDefault(); // Prevent the default paste action
      };
    
     const  handleDrop = (e) => {
        e.preventDefault(); // Prevent the default drop action
      };
    return(
        <div>
           <label>Inputfieldprevent</label> 
        <input
          type="text"
          placeholder="No copy & paste"
          onPaste={handlePaste}
          onDrop={handleDrop}
        />
        <label>Textareaprevent</label>
        <textarea
          placeholder="No copy & paste"
          onPaste={handlePaste}
          onDrop={handleDrop}
        />
      </div>
    );
}
export default Preventcopypaste;