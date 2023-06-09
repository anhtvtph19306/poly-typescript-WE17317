import { useEffect, useState } from "react"
import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [timer, setTimer] = useState(3)

    const handlePlay = (position) => {
        console.log(position);
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return i
        })
        setGame(newGame)
        setPlayer(!player)
    }

    const handlePlayAuto = () => {
        const emptyGame = game.map((square, index) => square ? null : index).filter(item => item != null)
        const position = emptyGame[Math.floor(Math.random() * emptyGame.length)];
        handlePlay(position)
    }

    const winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [p1, p2, p3] = winList[i]
            if (game[p1] === game[p2] && game[p2] === game[p3] && game[p3] === game[p1]) {
                return game[p1]
            }
        }

    }
    const reload = () => {
        setGame([null, null, null, null, null, null, null, null, null])
    }

    useEffect(() => {
        if (timer < 0) {
            handlePlayAuto()
            setTimer(3)
        }
        // Asynchronous
        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

    return <div className="">
        <h1 className="">Winner is: {checkWinner()}</h1>
        <h2>Time: {timer}</h2>
        <div className="box-content grid grid-cols-3 gap-3 m-3">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div>
        <button onClick={reload} className="reload">relload</button>

    </div>
}

export default Board