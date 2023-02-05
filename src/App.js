import React, { useRef, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [addText, setAddText] = useState("");
  const [messageSub, setMessageSub] = useState("");
  const [clearText , setClearText] =useState(null);

  

  const handUserInput = (e) => {
    setMessageSub(e.target.value);
  };

  const keyDownPress = (e) => {
    if (e.key === "Enter") {

      setClearText("");

      submit();
      
      
    }
  };

  const submit = (e) => {

    setClearText("");
    
    if (messageSub === "") {

      
      
      setAddText("Бичих зүйлээ үлдээнэ үү");
      e.preventDefault();
    } else {
      

      setAddText("Баярлалаа хөөрхнөө :)");

      Axios.post("http://localhost:3001/submit", {
        message: messageSub,
      });
      e.preventDefault();
    }

   
  };

  return (
    <div className="container">
      <form className="form-container">
        <p>Хэлэхийг хүссэн зүйлээ үлдээнэ үү</p>
        <textarea
          name="text"
          onKeyPress={keyDownPress}
          onChange={handUserInput}
          value={clearText}
        />{" "}
        <br />
        <input
          className="button"
          type="submit"
          onClick={submit}
          value="илгээх"
        />
        <p>{addText}</p>
      </form>
    </div>
  );
}

export default App;
