import { useState } from 'react'

function App() {
  const [bgColor, setbgColor] = useState('#213A57')
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : bgColor}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setbgColor("#213A57")} className='border-solid border-black border-2 outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor: "#213A57", width:35, height:35}}></button>
            <button onClick={() => setbgColor("#0B6477")} className='border-solid border-black border-2 outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor: "#0B6477", width:35, height:35}}></button>
            <button onClick={() => setbgColor("#14919B")} className='border-solid border-black border-2 outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor: "#14919B", width:35, height:35}}></button>
            <button onClick={() => setbgColor("#0AD1C8")} className='border-solid border-black border-2 outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor: "#0AD1C8", width:35, height:35}}></button>
            <button onClick={() => setbgColor("#45DFB1")} className='border-solid border-black border-2 outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor: "#45DFB1", width:35, height:35}}></button>
            <button onClick={() => setbgColor("#80ED99")} className='border-solid border-black border-2 outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor: "#80ED99", width:35, height:35}}></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
