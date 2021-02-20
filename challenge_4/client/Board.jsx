import React, { useState } from 'react';
import { Row, Button } from 'react-bootstrap';


const Board = (props) => {
const [board, setBoard] = useState([]);
const [start, setStart] = useState(false);
const [lose, setLose] = useState(false);
const [win, setWin] = useState(false);
const [count, setCount] = useState(0);
const newBoard = (e) => {
if (e.target.textContent === "Restart") {
  location.reload();
} else {
  let arrBoard = [];
  let booleanBoard = [];
  for (let i = 0; i < 100; i ++) {
   arrBoard[i] = 0;
   booleanBoard[i] = false;
  }
  for (let j = 0; j < 10; j ++) {
    let rando = Math.floor(Math.random() * 100);
    if (arrBoard[rando] === 'b') {
      arrBoard[rando + 1] = 'b';
    } else {
      arrBoard[rando] = 'b';

    }
  }
 countBoard(arrBoard);

}

}


const countBoard = (input) => {

  const newBoard = [];
  for (let k = 0; k < 100; k ++) {
    if (input[k] === 'b') {
      newBoard[k] = 'b';
    } else if (k === 0) {
      let count = 0;
      if (input[1] === 'b') {
        count++
      }
      if (input[10] === 'b') {
        count++
      }
      if (input[11] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 9) {
      let count = 0;
      if (input[8] === 'b') {
        count++
      }
      if (input[19] === 'b') {
        count++
      }
      if (input[18] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 99) {
      let count = 0;
      if (input[98] === 'b') {
        count++
      }
      if (input[89] === 'b') {
        count++
      }
      if (input[88] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 90) {
      let count = 0;
      if (input[91] === 'b') {
        count++
      }
      if (input[80] === 'b') {
        count++
      }
      if (input[81] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 1 || k === 2 || k === 3 || k === 4 || k === 5 || k === 6 || k === 7 || k === 8) {
      let count = 0;
      if (input[k - 1] === 'b') {
        count++
      }
      if (input[k + 1] === 'b') {
        count++
      }
      if (input[k + 10] === 'b') {
        count++
      }
      if (input[k + 9] === 'b') {
        count++
      }
      if (input[k + 11] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 19 || k === 29 || k === 39 || k === 49 || k === 59 || k === 69 || k === 79 || k === 89) {
      let count = 0;
      if (input[k - 10] === 'b') {
        count++
      }
      if (input[k + 10] === 'b') {
        count++
      }
      if (input[k - 1] === 'b') {
        count++
      }
      if (input[k - 11] === 'b') {
        count++
      }
      if (input[k + 9] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 91 || k === 92 || k === 93 || k === 94 || k === 95 || k === 96 || k === 97 || k === 98) {
      let count = 0;
      if (input[k - 1] === 'b') {
        count++
      }
      if (input[k + 1] === 'b') {
        count++
      }
      if (input[k - 10] === 'b') {
        count++
      }
      if (input[k - 11] === 'b') {
        count++
      }
      if (input[k - 9] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else if (k === 10 || k === 20 || k === 30 || k === 40 || k === 50 || k === 60 || k === 70 || k === 80) {
      let count = 0;
      if (input[k - 10] === 'b') {
        count++
      }
      if (input[k + 10] === 'b') {
        count++
      }
      if (input[k + 1] === 'b') {
        count++
      }
      if (input[k - 9] === 'b') {
        count++
      }
      if (input[k + 11] === 'b') {
        count++
      }
      newBoard[k] = count;
    } else {

    let count = 0;
    if (input[k - 1] === 'b') {
        count++
    }
    if (input[k + 1] === 'b') {
        count++
    }
    if (input[k - 11] === 'b') {
        count++
    }
    if (input[k + 11] === 'b') {
        count++
    }
    if (input[k + 10] === 'b') {
        count++
    }
    if (input[k - 10] === 'b') {
        count++
    }
    if (input[k + 9] === 'b') {
        count++
    }
    if (input[k - 9] === 'b') {
        count++
    }
newBoard[k] = count;
}
}
setBoard(newBoard);
}


const changeSquare = (e) => {

  if (e.target.children[1].classList[0] === 'fa') {
    let child = e.target.children[1];
  let element = e.target;
    element.className += " clicked";
  child.classList.remove("hidden");
    setLose(true);
  } else {
    let num = parseInt(e.target.children[0].name);
  let childText = e.target.children[1].textContent;
  let child = e.target.children[1];
  let element = e.target;
  element.className += " clicked";
  child.classList.remove("hidden");
  setCount(count + 1);
  if (count === 90) {
    setWin(true);
  }
  if(childText === '0') {
    if (num === 0) {
      document.getElementById(`${num + 1}`).click();
      document.getElementById(`${num + 10}`).click();
      document.getElementById(`${num + 11}`).click();
    } else if (num === 9) {
      document.getElementById(`${num - 1}`).click();
      document.getElementById(`${num + 10}`).click();
      document.getElementById(`${num + 9}`).click();
    } else if (num === 90) {
      document.getElementById(`${num - 10}`).click();
      document.getElementById(`${num + 1}`).click();
      document.getElementById(`${num - 9}`).click();
    } else if (num === 99) {
      document.getElementById(`${num - 1}`).click();
      document.getElementById(`${num - 10}`).click();
      document.getElementById(`${num - 11}`).click();
    } else if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8) {
      document.getElementById(`${num - 1}`).click();
      document.getElementById(`${num + 1}`).click();
      document.getElementById(`${num + 9}`).click();
      document.getElementById(`${num + 10}`).click();
      document.getElementById(`${num + 11}`).click();
    } else if (num === 19 || num === 29 || num === 39 || num === 49 || num === 59 || num === 69 || num === 79 || num === 89) {
      document.getElementById(`${num - 1}`).click();
      document.getElementById(`${num + 10}`).click();
      document.getElementById(`${num + 9}`).click();
      document.getElementById(`${num - 10}`).click();
      document.getElementById(`${num - 11}`).click();
    } else if (num === 91 || num === 92 || num === 93 || num === 94 || num === 95 || num === 96 || num === 97 || num === 98) {
      document.getElementById(`${num - 1}`).click();
      document.getElementById(`${num + 1}`).click();
      document.getElementById(`${num - 9}`).click();
      document.getElementById(`${num - 10}`).click();
      document.getElementById(`${num - 11}`).click();
    } else if (num === 10 || num === 20 || num === 30 || num === 40 || num === 50 || num === 60 || num === 70 || num === 80) {
      document.getElementById(`${num + 1}`).click();
      document.getElementById(`${num + 10}`).click();
      document.getElementById(`${num - 9}`).click();
      document.getElementById(`${num - 10}`).click();
      document.getElementById(`${num + 11}`).click();
    } else {
      document.getElementById(`${num + 1}`).click();
      document.getElementById(`${num - 1}`).click();
      document.getElementById(`${num - 9}`).click();
      document.getElementById(`${num - 10}`).click();
      document.getElementById(`${num - 11}`).click();
      document.getElementById(`${num + 9}`).click();
      document.getElementById(`${num + 10}`).click();
      document.getElementById(`${num + 11}`).click();
    }

  }
  }

}



  return (

      <div className="board">
        {
       start ?
       <div>
      <Row style={{marginLeft: "2px"}}>
        <div id="0" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="0"></input>
          {board[0] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[0]}</div> }</div>
         <div id="1" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="1"></input>{board[1] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[1]}</div> }</div>
          <div id="2" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="2"></input>{board[2] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[2]}</div> }</div>
          <div id="3"  className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="3"></input>{board[3] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[3]}</div> }</div>
          <div id="4" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="4"></input>{board[4] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[4]}</div> }</div>
          <div id="5" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="5"></input>{board[5] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[5]}</div> }</div>
          <div id="6" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="6"></input>{board[6] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[6]}</div> }</div>
          <div id="7" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="7"></input>{board[7] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[7]}</div> }</div>
          <div id="8" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="8"></input>{board[8] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[8]}</div> }</div>
          <div id="9" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="9"></input>{board[9] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[9]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="10" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="10"></input>{board[10] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[10]}</div> }</div>
          <div id="11" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="11"></input>{board[11] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[11]}</div> }</div>
          <div id="12" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="12"></input>{board[12] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[12]}</div> }</div>
          <div id="13" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="13"></input>{board[13] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[13]}</div> }</div>
          <div id="14" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="14"></input>{board[14] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[14]}</div> }</div>
          <div id="15" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="15"></input>{board[15] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[15]}</div> }</div>
          <div id="16" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="16"></input>{board[16] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[16]}</div> }</div>
          <div id="17" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="17"></input>{board[17] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[17]}</div> }</div>
          <div id="18" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="18"></input>{board[18] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[18]}</div> }</div>
          <div id="19" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="19"></input>{board[19] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[19]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="20" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="20"></input>{board[20] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[20]}</div> }</div>
          <div id="21" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="21"></input>{board[21] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[21]}</div> }</div>
          <div id="22" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="22"></input>{board[22] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[22]}</div> }</div>
          <div id="23" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="23"></input>{board[23] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[23]}</div> }</div>
          <div id="24" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="24"></input>{board[24] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[24]}</div> }</div>
          <div id="25" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="25"></input>{board[25] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[25]}</div> }</div>
          <div id="26" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="26"></input>{board[26] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[26]}</div> }</div>
          <div id="27" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="27"></input>{board[27] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[27]}</div> }</div>
          <div id="28" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="28"></input>{board[28] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[28]}</div> }</div>
          <div id="29" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="29"></input>{board[29] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[29]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="30" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="30"></input>{board[30] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[30]}</div> }</div>
          <div id="31" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="31"></input>{board[31] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[31]}</div> }</div>
          <div id="32" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="32"></input>{board[32] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[32]}</div> }</div>
          <div id="33" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="33"></input>{board[33] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[33]}</div> }</div>
          <div id="34" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="34"></input>{board[34] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[34]}</div> }</div>
          <div id="35" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="35"></input>{board[35] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[35]}</div> }</div>
          <div id="36" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="36"></input>{board[36] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[36]}</div> }</div>
          <div id="37" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="37"></input>{board[37] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[37]}</div> }</div>
          <div id="38" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="38"></input>{board[38] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[38]}</div> }</div>
          <div id="39" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="39"></input>{board[39] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[39]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="40" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="40"></input>{board[40] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[40]}</div> }</div>
          <div id="41" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="41"></input>{board[41] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[41]}</div> }</div>
          <div id="42" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="42"></input>{board[42] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[42]}</div> }</div>
          <div id="43" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="43"></input>{board[43] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[43]}</div> }</div>
          <div id="44" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="44"></input>{board[44] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[44]}</div> }</div>
          <div id="45" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="45"></input>{board[45] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[45]}</div> }</div>
          <div id="46" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="46"></input>{board[46] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[46]}</div> }</div>
          <div id="47" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="47"></input>{board[47] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[47]}</div> }</div>
          <div id="48" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="48"></input>{board[48] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[48]}</div> }</div>
          <div id="49" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="49"></input>{board[49] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[49]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="50" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="50"></input>{board[50] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[50]}</div> }</div>
          <div id="51" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="51"></input>{board[51] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[51]}</div> }</div>
          <div id="52" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="52"></input>{board[52] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[52]}</div> }</div>
          <div id="53" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="53"></input>{board[53] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[53]}</div> }</div>
          <div id="54" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="54"></input>{board[54] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[54]}</div> }</div>
          <div id="55" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="55"></input>{board[55] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[55]}</div> }</div>
          <div id="56" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="56"></input>{board[56] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[56]}</div> }</div>
          <div id="57" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="57"></input>{board[57] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[57]}</div> }</div>
          <div id="58" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="58"></input>{board[58] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[58]}</div> }</div>
          <div id="59" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="59"></input>{board[59] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[59]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="60" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="60"></input>{board[60] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[60]}</div> }</div>
          <div id="61" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="61"></input>{board[61] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[61]}</div> }</div>
          <div id="62" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="62"></input>{board[62] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[62]}</div> }</div>
          <div id="63" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="63"></input>{board[63] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[63]}</div> }</div>
          <div id="64" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="64"></input>{board[64] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[64]}</div> }</div>
          <div id="65" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="65"></input>{board[65] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[65]}</div> }</div>
          <div id="66" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="66"></input>{board[66] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[66]}</div> }</div>
          <div id="67" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="67"></input>{board[67] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[67]}</div> }</div>
          <div id="68" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="68"></input>{board[68] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[68]}</div> }</div>
          <div id="69" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="69"></input>{board[69] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[69]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="70" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="70"></input>{board[70] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[70]}</div> }</div>
          <div id="71" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="71"></input>{board[71] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[71]}</div> }</div>
          <div id="72" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="72"></input>{board[72] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[72]}</div> }</div>
          <div id="73" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="73"></input>{board[73] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[73]}</div> }</div>
          <div id="74" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="74"></input>{board[74] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[74]}</div> }</div>
          <div id="75" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="75"></input>{board[75] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[75]}</div> }</div>
          <div id="76" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="76"></input>{board[76] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[76]}</div> }</div>
          <div id="77" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="77"></input>{board[77] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[77]}</div> }</div>
          <div id="78" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="78"></input>{board[78] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[78]}</div> }</div>
          <div id="79" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="79"></input>{board[79] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[79]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="80" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="80"></input>{board[80] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[80]}</div> }</div>
          <div id="81" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="81"></input>{board[81] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[81]}</div> }</div>
          <div id="82" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="82"></input>{board[82] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[82]}</div> }</div>
          <div id="83" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="83"></input>{board[83] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[83]}</div> }</div>
          <div id="84" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="84"></input>{board[84] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[84]}</div> }</div>
          <div id="85" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="85"></input>{board[85] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[85]}</div> }</div>
          <div id="86" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="86"></input>{board[86] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[86]}</div> }</div>
          <div id="87" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="87"></input>{board[87] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[87]}</div> }</div>
          <div id="88" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="88"></input>{board[88] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[88]}</div> }</div>
          <div id="89" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="89"></input>{board[89] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[89]}</div> }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div id="90" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="90"></input>{board[90] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[90]}</div> }</div>
          <div id="91" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="91"></input>{board[91] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[91]}</div> }</div>
          <div id="92" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="92"></input>{board[92] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[92]}</div> }</div>
          <div id="93" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="93"></input>{board[93] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[93]}</div> }</div>
          <div id="94" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="94"></input>{board[94] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[94]}</div> }</div>
          <div id="95" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="95"></input>{board[95] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[95]}</div> }</div>
          <div id="96" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="96"></input>{board[96] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[96]}</div> }</div>
          <div id="97" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="97"></input>{board[97] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[97]}</div> }</div>
          <div id="98" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="98"></input>{board[98] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[98]}</div> }</div>
          <div id="99" className="square" onClick={(e) => changeSquare(e)}>
          <input className="hidden" name="99"></input>{board[99] === 'b' ? <i class="fa fa-bomb hidden"></i> : <div className="hidden">{board[99]}</div> }</div>
      </Row>
      </div>
       : ''
        }
        <div>
          <Row>
      <Button style={{marginTop: '20px', marginRight: '30px', marginLeft: '20px'}}onClick={(e) => {newBoard(e); setStart(true); if (e.target.textContent === "New Board") {e.target.textContent = "Restart";}}}>New Board</Button>
        {lose ? <div>Game Over!</div> : ''}
        {win ? <div>You Won!</div>: ''}
          </Row>

        </div>
        </div>

  )
}

export default Board;