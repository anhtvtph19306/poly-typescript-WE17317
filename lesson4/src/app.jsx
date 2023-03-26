import { useState } from "react"
import Avatar from "./components/avatar"
import Square from "./components/square"
import Board from "./components/board"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// State: Trạng thái - Bộ nhớ của component, Quyết định component được hiển thị như thế nào

const App = () => {
    const reload = () => {
        window.location.reload()
    }
    return <div className="h-[100vh] flex justify-center items-center">
        <Board>

        </Board>

        <br /><button onClick={reload} className="reload">relload</button>
    </div>
}

export default App