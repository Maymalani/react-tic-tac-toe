import React, { useEffect, useState } from 'react'

const App = () => {

  const boxObjArray = [
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false },
    { val: "", isDisabled: false }
  ]

  const [box, setBox] = useState(boxObjArray);
  const [turn, setTurn] = useState('X Turn');
  const [boxValue, setBoxValue] = useState('X');
  const [winner, setWinner] = useState("");

  const checkWin = () => {
    if (box[0].val === 'X' && box[1].val === 'X' && box[2].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[3].val === 'X' && box[4].val === 'X' && box[5].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[6].val === 'X' && box[7].val === 'X' && box[8].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[0].val === 'X' && box[3].val === 'X' && box[6].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[1].val === 'X' && box[4].val === 'X' && box[7].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[2].val === 'X' && box[5].val === 'X' && box[8].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[0].val === 'X' && box[4].val === 'X' && box[8].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[2].val === 'X' && box[4].val === 'X' && box[6].val === 'X') {
      setWinner("Hurray ! X Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    // helo
    else if (box[0].val === 'O' && box[1].val === 'O' && box[2].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[3].val === 'O' && box[4].val === 'O' && box[5].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[6].val === 'O' && box[7].val === 'O' && box[8].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[0].val === 'O' && box[3].val === 'O' && box[6].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[1].val === 'O' && box[4].val === 'O' && box[7].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[2].val === 'O' && box[5].val === 'O' && box[8].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[0].val === 'O' && box[4].val === 'O' && box[8].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
    else if (box[2].val === 'O' && box[4].val === 'O' && box[6].val === 'O') {
      setWinner("Hurray ! O Winner");
      setTurn("");
      box.forEach(b => {
        b.isDisabled = true;
      })
    }
  }

  const handleClick = (id) => {
    let temp = [...box];
    temp[id].val = boxValue;
    temp[id].isDisabled = true;
    setBox(temp);
    setBoxValue(boxValue === 'X' ? 'O' : 'X');
    setTurn(turn === 'X Turn' ? 'O Turn' : 'X Turn');
    checkWin();
  }

  const restart = () => {
    setBox(boxObjArray);
    setTurn("X Turn");
    setBoxValue("X");
    setWinner("");
  }

  return (
    <>
      <header className='w-screen h-[68px] shadow-md'>
        <div className='container'>
          <div className='flex justify-center items-center'>
            <h1 className="font-semibold text-3xl py-3">Tic Tac Toe</h1>
          </div>
        </div>
      </header>
      <section className='py-3'>
        <div className='container'>
          <div className='flex flex-col'>
            <div className='w-[300px] md:w-[450px] h-[300px] md:h-[450px] m-auto shadow-md rounded-lg p-5'>
              {
                box.map((val, ind) => {
                  return (
                    <input type="text" key={ind} disabled={box[ind].isDisabled} value={box[ind].val} onClick={() => handleClick(ind)} className={`w-1/3 h-1/3 text-[70px] text-center pb-[12px] rounded-md border-[1px] border-black outline-none ${val[ind]?.isDisabled ? "cursor-not-allowed" : "cursor-auto"}`} />
                  )
                })
              }
            </div>
            <span className={`text-center my-2 text-2xl font-semibold ${turn.length > 0 ? "block" : "hidden"}`}>{turn}</span>
            <span className={`text-center my-2 text-2xl font-semibold ${winner.length > 0 ? "block" : "hidden"}`}>{winner}</span>
            <button className={`bg-black text-white px-2 py-1 rounded-md m-auto w-[120px] ${winner.length > 0 && turn.length === 0 ? "block" : "hidden"}`} onClick={restart}>Restart Game</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
