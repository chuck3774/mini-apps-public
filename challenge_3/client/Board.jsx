import React, {useState} from 'react';
import { Row, Button } from 'react-bootstrap';

const Board = (props) => {
 const [firstThrow, setFirstThrow] = useState(0);
 const [secThrow, setSecThrow] = useState(0);
 const [thirdThrow, setThirdThrow] = useState(0);
 const [frame, setFrame] = useState(1);
 const [ball, setBall] = useState(1);
 const [ball11, setBall11] = useState(0);
 const [ball12, setBall12] = useState(0);
 const [score1, setScore1] = useState(ball11 + ball12);
 const [ball21, setBall21] = useState(0);
 const [ball22, setBall22] = useState(0);
 const [score2, setScore2] = useState(ball21 + ball22);
 const [ball31, setBall31] = useState(0);
 const [ball32, setBall32] = useState(0);
 const [score3, setScore3] = useState(ball31 + ball32);
 const [ball41, setBall41] = useState(0);
 const [ball42, setBall42] = useState(0);
 const [score4, setScore4] = useState(ball41 + ball42);
 const [ball51, setBall51] = useState(0);
 const [ball52, setBall52] = useState(0);
 const [score5, setScore5] = useState(ball51 + ball52);
 const [ball61, setBall61] = useState(0);
 const [ball62, setBall62] = useState(0);
 const [score6, setScore6] = useState(ball61 + ball62);
 const [ball71, setBall71] = useState(0);
 const [ball72, setBall72] = useState(0);
 const [score7, setScore7] = useState(ball71 + ball72);
 const [ball81, setBall81] = useState(0);
 const [ball82, setBall82] = useState(0);
 const [score8, setScore8] = useState(ball81 + ball82);
 const [ball91, setBall91] = useState(0);
 const [ball92, setBall92] = useState(0);
 const [score9, setScore9] = useState(ball91 + ball92);
 const [ball101, setBall101] = useState(0);
 const [ball102, setBall102] = useState(0);
 const [ball103, setBall103] = useState(0);
 const [score10, setScore10] = useState(ball101 + ball102);

 const submit = (e) => {
   let numberString = e.target.textContent;
   let number = parseInt(numberString);

   if (ball === 1) {
     setFirstThrow(number);
     if (number === 10 && frame !== 10) {
       setBall(1);
     } else {
       setBall(2);

     }
     if (frame === 1) {
      setBall11(number);
      setScore1(number);
     }
     if (frame === 2) {
     if (ball11 === 10 || ball11 + ball12 === 10 && ball11 !== 10) {
        setBall21(number);
        setScore2(number);
        setScore1(number + score1);
       } else {
         setBall21(number);
         setScore2(number);

       }
     }
     if (frame === 3) {
       if (ball11 === 10 && ball21 === 10) {
        setBall31(number);
        setScore3(number);
        setScore1(number + score1);
        setScore2(number + score2);
       } else if (ball21 === 10 || ball21 + ball22 === 10 && ball21 !== 10) {
        setBall31(number);
        setScore3(number);
        setScore2(number + score2);
       } else {
         setBall31(number);
         setScore3(number);

       }
     }
     if (frame === 4) {
       if (ball21 === 10 && ball31 === 10) {
        setBall41(number);
        setScore4(number);
        setScore2(number + score2);
        setScore3(number + score3);
       } else if (ball31 === 10 || ball31 + ball32 === 10 && ball31 !== 10) {
        setBall41(number);
        setScore4(number);
        setScore3(number + score3);
       } else {
         setBall41(number);
         setScore4(number);

       }
     }
     if (frame === 5) {
       if (ball31 === 10 && ball41 === 10) {
        setBall51(number);
        setScore5(number);
        setScore3(number + score3);
        setScore4(number + score4);
       } else if (ball41 === 10 || ball41 + ball42 === 10 && ball41 !== 10) {
        setBall51(number);
        setScore5(number);
        setScore4(number + score4);
       } else {
         setBall51(number);
         setScore5(number);

       }
     }
     if (frame === 6) {
       if (ball41 === 10 && ball51 === 10) {
        setBall61(number);
        setScore6(number);
        setScore4(number + score4);
        setScore5(number + score5);
       } else if (ball51 === 10 || ball51 + ball52 === 10 && ball51 !== 10) {
        setBall61(number);
        setScore6(number);
        setScore5(number + score5);
       } else {

         setBall61(number);
         setScore6(number);
       }
     }
     if (frame === 7) {
       if (ball51 === 10 && ball61 === 10) {
         setBall71(number);
         setScore7(number);
         setScore5(number + score5);
         setScore6(number + score6);
       } else if (ball61 === 10 || ball61 + ball62 === 10 && ball61 !== 10) {
        setBall71(number);
        setScore7(number);
        setScore6(number + score6);
       } else {
        setBall71(number);
        setScore7(number);
       }
     }
     if (frame === 8) {
       if (ball61 === 10 && ball71 === 10) {
        setBall81(number);
        setScore8(number);
        setScore6(number + score6);
        setScore7(number + score7);
       } else if (ball71 === 10 || ball71 + ball72 === 10 && ball71 !== 10) {
        setBall81(number);
        setScore8(number);
        setScore7(number + score7);
       } else {
         setBall81(number);
         setScore8(number);

       }
     }
     if (frame === 9) {
       if (ball71 === 10 && ball81 === 10) {
        setBall91(number);
        setScore9(number);
        setScore7(number + score7);
        setScore8(number + score8);
       } else if (ball81 === 10 || ball81 + ball82 === 10 && ball81 !== 10) {
        setBall91(number);
        setScore9(number);
        setScore8(number + score8);
       } else {
         setBall91(number);
         setScore9(number);

       }
     }
     if (frame === 10) {
       if (ball81 === 10 && ball91 === 10) {
         setBall101(number);
         setScore10(number);
         setScore8(number + score8);
         setScore9(number + score9);
     } else if (ball91 === 10 || ball91 + ball92 === 10 && ball91 !== 10) {
      setBall101(number);
      setScore10(number);
      setScore9(number + score9);
     } else {
      setBall101(number);
      setScore10(number);
     }
     }
   }
   if (ball === 2) {
    setSecThrow(number);
    if (frame === 10) {
      setBall(3);
     } else {
       setBall(1);
     }
    if (frame === 1) {
      setBall12(number);
      setScore1(number + score1);
     }
     if (frame === 2) {
      if (ball11 === 10 && ball21 !== 10) {
        setBall22(number);
        setScore2(number + score2);
        setScore1(number + score1);
      } else {
        setBall22(number);
        setScore2(number + score2);

      }
     }
     if (frame === 3) {
       if (ball21 === 10 && ball31 !== 10) {
        setBall32(number);
        setScore3(number + score3);
        setScore2(number + score2);
       } else {
         setBall32(number);
         setScore3(number + score3);

       }
     }
     if (frame === 4) {
       if (ball31 === 10 && ball41 !== 10) {
        setBall42(number);
        setScore4(number + score4);
        setScore3(number + score3);
       } else {
         setBall42(number);
         setScore4(number + score4);

       }
     }
     if (frame === 5) {
       if (ball41 === 10 && ball51 !== 10) {
        setBall52(number);
        setScore5(number + score5);
        setScore4(number + score4);
       } else {
         setBall52(number);
         setScore5(number + score5);

       }
     }
     if (frame === 6) {
       if (ball51 === 10 && ball61 !== 10) {
        setBall62(number);
        setScore6(number + score6);
        setScore5(number + score5);
       } else {
         setBall62(number);
         setScore6(number + score6);

       }
     }
     if (frame === 7) {
       if (ball61 === 10 && ball71 !== 10) {
        setBall72(number);
        setScore7(number + score7);
        setScore6(number + score6);
       } else {
         setBall72(number);
         setScore7(number + score7);

       }
     }
     if (frame === 8) {
       if (ball71 === 10 && ball81 !== 10) {
        setBall82(number);
        setScore8(number + score8);
        setScore7(number + score7);
       } else {
         setBall82(number);
         setScore8(number + score8);

       }
     }
     if (frame === 9) {
       if (ball81 === 10 && ball91 !== 10) {
        setBall92(number);
        setScore9(number + score9);
        setScore8(number + score8);
       } else {
         setBall92(number);
         setScore9(number + score9);

       }
     }
     if (frame === 10) {
       if (ball91 === 10 && ball101 !== 10) {
         setBall102(number);
         setScore10(number + score10);
         setScore9(number + score9);

       } else {
        setBall102(number);
        setScore10(number + score10);
        setScore9(number + score9);
       }
     }
  }

  if (ball === 3) {
    setThirdThrow(number);
    setBall103(number);
    setScore10(number + score10);
  }

 }

 const nextFrame = () => {
   setFrame(frame + 1);
   setFirstThrow(0);
   setSecThrow(0);
   setThirdThrow(0);
 }

 const newGame = () => {
  setFrame(1);
  setBall(1);
  setFirstThrow(0);
  setSecThrow(0);
  setThirdThrow(0);
  setBall11(0);
  setBall12(0);
  setScore1(0);
  setBall21(0);
  setBall22(0);
  setScore2(0);
  setBall31(0);
  setBall32(0);
  setScore3(0);
  setBall41(0);
  setBall42(0);
  setScore4(0);
  setBall51(0);
  setBall52(0);
  setScore5(0);
  setBall61(0);
  setBall62(0);
  setScore6(0);
  setBall71(0);
  setBall72(0);
  setScore7(0);
  setBall81(0);
  setBall82(0);
  setScore8(0);
  setBall91(0);
  setBall92(0);
  setScore9(0);
  setBall101(0);
  setBall102(0);
  setBall103(0);
  setScore10(0);
 }

  return (
    <div className="bowling">
   <Row style={{marginTop: '20px', marginLeft: '2px'}}>
     <Button onClick={(e) => submit(e)} >0</Button>
     <Button onClick={(e) => submit(e)}>1</Button>
     <Button onClick={(e) => submit(e)}>2</Button>
     <Button onClick={(e) => submit(e)}>3</Button>
     <Button onClick={(e) => submit(e)}>4</Button>
     <Button onClick={(e) => submit(e)}>5</Button>
     <Button onClick={(e) => submit(e)}>6</Button>
     <Button onClick={(e) => submit(e)}>7</Button>
     <Button onClick={(e) => submit(e)}>8</Button>
     <Button onClick={(e) => submit(e)}>9</Button>
     <Button style={{marginRight: '50px'}}
     onClick={(e) => submit(e)}
     >10</Button>
     <div className="framescore">{firstThrow}</div>
     <div className="framescore">{secThrow}</div>
     <div className="framescore">{thirdThrow}</div>
     <Button style={{marginLeft: '10px'}}
     onClick={() => nextFrame()}
     >Next Frame</Button>
     <Button style={{marginLeft: '10px'}}
     onClick={() => newGame()}
     >New Game</Button>
   </Row>
   <div className='scoreCard'>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 1</div>
     <div className='square'>{ball11}</div>
     <div className='square'>{ball12}</div>
     <div className='square'>{score1}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 2</div>
     <div className='square'>{ball21}</div>
     <div className='square'>{ball22}</div>
     <div className='square'>{score2}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 3</div>
     <div className='square'>{ball31}</div>
     <div className='square'>{ball32}</div>
     <div className='square'>{score3}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 4</div>
     <div className='square'>{ball41}</div>
     <div className='square'>{ball42}</div>
     <div className='square'>{score4}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 5</div>
     <div className='square'>{ball51}</div>
     <div className='square'>{ball52}</div>
     <div className='square'>{score5}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 6</div>
     <div className='square'>{ball61}</div>
     <div className='square'>{ball62}</div>
     <div className='square'>{score6}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 7</div>
     <div className='square'>{ball71}</div>
     <div className='square'>{ball72}</div>
     <div className='square'>{score7}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 8</div>
     <div className='square'>{ball81}</div>
     <div className='square'>{ball82}</div>
     <div className='square'>{score8}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 9</div>
     <div className='square'>{ball91}</div>
     <div className='square'>{ball92}</div>
     <div className='square'>{score9}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="frame">Frame 10</div>
     <div className='square'>{ball101}</div>
     <div className='square'>{ball102}</div>
     <div className='square'>{ball103}</div>
     <div className='square'>{score10}</div>
     </Row>
     <Row style={{marginLeft: '2px', marginTop: '10px'}}>
     <div className="totalTitle">Total Score</div>
     <div className="totalScore">{score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10}</div>

     </Row>

   </div>

    </div>
  )
}

export default Board;