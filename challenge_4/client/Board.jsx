import React, { useState } from 'react';
import { Row, Button } from 'react-bootstrap';


const Board = (props) => {
const [squares, setSquares] = useState([]);
const [board, setBoard] = useState([]);
const [start, setStart] = useState(false);
const newBoard = () => {
  let arrBoard = [];
  for (let i = 0; i < 100; i ++) {
   arrBoard[i] = 0;
  }
  for (let j = 0; j < 10; j ++) {
    let rando = Math.floor(Math.random() * 100);
    arrBoard[rando] = 'b';
  }
 setBoard(arrBoard);
}




  return (

      <div className="board">
        {
       start ?
       <div>
      <Row style={{marginLeft: "2px"}}>
        <div className="square">{board[0] === 'b' ? <i class="fa fa-bomb"></i> : board[0] }</div>
        <div className="square">{board[1] === 'b' ? <i class="fa fa-bomb"></i> : board[1] }</div>
        <div className="square">{board[2] === 'b' ? <i class="fa fa-bomb"></i> : board[2] }</div>
        <div className="square">{board[3] === 'b' ? <i class="fa fa-bomb"></i> : board[3] }</div>
        <div className="square">{board[4] === 'b' ? <i class="fa fa-bomb"></i> : board[4] }</div>
        <div className="square">{board[5] === 'b' ? <i class="fa fa-bomb"></i> : board[5] }</div>
        <div className="square">{board[6] === 'b' ? <i class="fa fa-bomb"></i> : board[6] }</div>
        <div className="square">{board[7] === 'b' ? <i class="fa fa-bomb"></i> : board[7] }</div>
        <div className="square">{board[8] === 'b' ? <i class="fa fa-bomb"></i> : board[8] }</div>
        <div className="square">{board[9] === 'b' ? <i class="fa fa-bomb"></i> : board[9] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[10] === 'b' ? <i class="fa fa-bomb"></i> : board[10] }</div>
        <div className="square">{board[11] === 'b' ? <i class="fa fa-bomb"></i> : board[11] }</div>
        <div className="square">{board[12] === 'b' ? <i class="fa fa-bomb"></i> : board[12] }</div>
        <div className="square">{board[13] === 'b' ? <i class="fa fa-bomb"></i> : board[13] }</div>
        <div className="square">{board[14] === 'b' ? <i class="fa fa-bomb"></i> : board[14] }</div>
        <div className="square">{board[15] === 'b' ? <i class="fa fa-bomb"></i> : board[15] }</div>
        <div className="square">{board[16] === 'b' ? <i class="fa fa-bomb"></i> : board[16] }</div>
        <div className="square">{board[17] === 'b' ? <i class="fa fa-bomb"></i> : board[17] }</div>
        <div className="square">{board[18] === 'b' ? <i class="fa fa-bomb"></i> : board[18] }</div>
        <div className="square">{board[19] === 'b' ? <i class="fa fa-bomb"></i> : board[19] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[20] === 'b' ? <i class="fa fa-bomb"></i> : board[20] }</div>
        <div className="square">{board[21] === 'b' ? <i class="fa fa-bomb"></i> : board[21] }</div>
        <div className="square">{board[22] === 'b' ? <i class="fa fa-bomb"></i> : board[22] }</div>
        <div className="square">{board[23] === 'b' ? <i class="fa fa-bomb"></i> : board[23] }</div>
        <div className="square">{board[24] === 'b' ? <i class="fa fa-bomb"></i> : board[24] }</div>
        <div className="square">{board[25] === 'b' ? <i class="fa fa-bomb"></i> : board[25] }</div>
        <div className="square">{board[26] === 'b' ? <i class="fa fa-bomb"></i> : board[26] }</div>
        <div className="square">{board[27] === 'b' ? <i class="fa fa-bomb"></i> : board[27] }</div>
        <div className="square">{board[28] === 'b' ? <i class="fa fa-bomb"></i> : board[28] }</div>
        <div className="square">{board[29] === 'b' ? <i class="fa fa-bomb"></i> : board[29] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[30] === 'b' ? <i class="fa fa-bomb"></i> : board[30] }</div>
        <div className="square">{board[31] === 'b' ? <i class="fa fa-bomb"></i> : board[31] }</div>
        <div className="square">{board[32] === 'b' ? <i class="fa fa-bomb"></i> : board[32] }</div>
        <div className="square">{board[33] === 'b' ? <i class="fa fa-bomb"></i> : board[33] }</div>
        <div className="square">{board[34] === 'b' ? <i class="fa fa-bomb"></i> : board[34] }</div>
        <div className="square">{board[35] === 'b' ? <i class="fa fa-bomb"></i> : board[35] }</div>
        <div className="square">{board[36] === 'b' ? <i class="fa fa-bomb"></i> : board[36] }</div>
        <div className="square">{board[37] === 'b' ? <i class="fa fa-bomb"></i> : board[37] }</div>
        <div className="square">{board[38] === 'b' ? <i class="fa fa-bomb"></i> : board[38] }</div>
        <div className="square">{board[39] === 'b' ? <i class="fa fa-bomb"></i> : board[39] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[40] === 'b' ? <i class="fa fa-bomb"></i> : board[40] }</div>
        <div className="square">{board[41] === 'b' ? <i class="fa fa-bomb"></i> : board[41] }</div>
        <div className="square">{board[42] === 'b' ? <i class="fa fa-bomb"></i> : board[42] }</div>
        <div className="square">{board[43] === 'b' ? <i class="fa fa-bomb"></i> : board[43] }</div>
        <div className="square">{board[44] === 'b' ? <i class="fa fa-bomb"></i> : board[44] }</div>
        <div className="square">{board[45] === 'b' ? <i class="fa fa-bomb"></i> : board[45] }</div>
        <div className="square">{board[46] === 'b' ? <i class="fa fa-bomb"></i> : board[46] }</div>
        <div className="square">{board[47] === 'b' ? <i class="fa fa-bomb"></i> : board[47] }}</div>
        <div className="square">{board[48] === 'b' ? <i class="fa fa-bomb"></i> : board[48] }</div>
        <div className="square">{board[49] === 'b' ? <i class="fa fa-bomb"></i> : board[49] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[50] === 'b' ? <i class="fa fa-bomb"></i> : board[50] }</div>
        <div className="square">{board[51] === 'b' ? <i class="fa fa-bomb"></i> : board[51] }</div>
        <div className="square">{board[52] === 'b' ? <i class="fa fa-bomb"></i> : board[52] }</div>
        <div className="square">{board[53] === 'b' ? <i class="fa fa-bomb"></i> : board[53] }</div>
        <div className="square">{board[54] === 'b' ? <i class="fa fa-bomb"></i> : board[54] }</div>
        <div className="square">{board[55] === 'b' ? <i class="fa fa-bomb"></i> : board[55] }</div>
        <div className="square">{board[56] === 'b' ? <i class="fa fa-bomb"></i> : board[56] }</div>
        <div className="square">{board[57] === 'b' ? <i class="fa fa-bomb"></i> : board[57] }</div>
        <div className="square">{board[58] === 'b' ? <i class="fa fa-bomb"></i> : board[58] }</div>
        <div className="square">{board[59] === 'b' ? <i class="fa fa-bomb"></i> : board[59] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[60] === 'b' ? <i class="fa fa-bomb"></i> : board[60] }</div>
        <div className="square">{board[61] === 'b' ? <i class="fa fa-bomb"></i> : board[61] }</div>
        <div className="square">{board[62] === 'b' ? <i class="fa fa-bomb"></i> : board[62] }}</div>
        <div className="square">{board[63] === 'b' ? <i class="fa fa-bomb"></i> : board[63] }</div>
        <div className="square">{board[64] === 'b' ? <i class="fa fa-bomb"></i> : board[64] }</div>
        <div className="square">{board[65] === 'b' ? <i class="fa fa-bomb"></i> : board[65] }</div>
        <div className="square">{board[66] === 'b' ? <i class="fa fa-bomb"></i> : board[66] }</div>
        <div className="square">{board[67] === 'b' ? <i class="fa fa-bomb"></i> : board[67] }</div>
        <div className="square">{board[68] === 'b' ? <i class="fa fa-bomb"></i> : board[68] }</div>
        <div className="square">{board[69] === 'b' ? <i class="fa fa-bomb"></i> : board[69] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[70] === 'b' ? <i class="fa fa-bomb"></i> : board[70] }</div>
        <div className="square">{board[71] === 'b' ? <i class="fa fa-bomb"></i> : board[71] }</div>
        <div className="square">{board[72] === 'b' ? <i class="fa fa-bomb"></i> : board[72] }</div>
        <div className="square">{board[73] === 'b' ? <i class="fa fa-bomb"></i> : board[73] }</div>
        <div className="square">{board[74] === 'b' ? <i class="fa fa-bomb"></i> : board[74] }</div>
        <div className="square">{board[75] === 'b' ? <i class="fa fa-bomb"></i> : board[75] }</div>
        <div className="square">{board[76] === 'b' ? <i class="fa fa-bomb"></i> : board[76] }</div>
        <div className="square">{board[77] === 'b' ? <i class="fa fa-bomb"></i> : board[77] }</div>
        <div className="square">{board[78] === 'b' ? <i class="fa fa-bomb"></i> : board[78] }</div>
        <div className="square">{board[79] === 'b' ? <i class="fa fa-bomb"></i> : board[79] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[80] === 'b' ? <i class="fa fa-bomb"></i> : board[80] }</div>
        <div className="square">{board[81] === 'b' ? <i class="fa fa-bomb"></i> : board[81] }</div>
        <div className="square">{board[82] === 'b' ? <i class="fa fa-bomb"></i> : board[82] }</div>
        <div className="square">{board[83] === 'b' ? <i class="fa fa-bomb"></i> : board[83] }</div>
        <div className="square">{board[84] === 'b' ? <i class="fa fa-bomb"></i> : board[84] }</div>
        <div className="square">{board[85] === 'b' ? <i class="fa fa-bomb"></i> : board[85] }</div>
        <div className="square">{board[86] === 'b' ? <i class="fa fa-bomb"></i> : board[86] }</div>
        <div className="square">{board[87] === 'b' ? <i class="fa fa-bomb"></i> : board[87] }</div>
        <div className="square">{board[88] === 'b' ? <i class="fa fa-bomb"></i> : board[88] }</div>
        <div className="square">{board[89] === 'b' ? <i class="fa fa-bomb"></i> : board[89] }</div>
      </Row>
      <Row style={{marginLeft: "2px"}}>
      <div className="square">{board[90] === 'b' ? <i class="fa fa-bomb"></i> : board[90] }</div>
        <div className="square">{board[91] === 'b' ? <i class="fa fa-bomb"></i> : board[91] }</div>
        <div className="square">{board[92] === 'b' ? <i class="fa fa-bomb"></i> : board[92] }</div>
        <div className="square">{board[93] === 'b' ? <i class="fa fa-bomb"></i> : board[93] }</div>
        <div className="square">{board[94] === 'b' ? <i class="fa fa-bomb"></i> : board[94] }</div>
        <div className="square">{board[95] === 'b' ? <i class="fa fa-bomb"></i> : board[95] }</div>
        <div className="square">{board[96] === 'b' ? <i class="fa fa-bomb"></i> : board[96] }</div>
        <div className="square">{board[97] === 'b' ? <i class="fa fa-bomb"></i> : board[97] }</div>
        <div className="square">{board[98] === 'b' ? <i class="fa fa-bomb"></i> : board[98] }</div>
        <div className="square">{board[99] === 'b' ? <i class="fa fa-bomb"></i> : board[99] }</div>
      </Row>
      </div>
       : ''
        }
        <div>
      <Button style={{marginTop: '20px'}}onClick={() => {newBoard(); setStart(true)}}>New Game</Button>

        </div>
        </div>

  )
}

export default Board;