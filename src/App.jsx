import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbAllow, setNumbAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    if (numbAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*(){}[]<>?|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }
    , [length, numbAllow, charAllow, setPassword])

  useEffect(() => passwordGenerator(), [length, numbAllow, charAllow, passwordGenerator])
  
  return (
    <>
      <div className=' bg-gray-700 rounded-3xl text-white w-1/2 mt-40 m-auto p-5'>
        <h1 className='text-center'>Password Generator</h1>
        <div className=' mb-4 text-yellow-600 font-bold'>

          <input type="text" className='rounded-lg outline-none w-full mt-5 p-3' value={password}
            placeholder='password' readOnly />

          <button className='shrink-0'>Copy</button>

          <div className='flex gap-2 mt-2'>

            <input type="range" max={10} min={6} onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="">length : {length}</label>
            <input type="checkbox" onChange={() => { setNumbAllow(pre => !pre) }} />
            <label htmlFor="">: Number</label>
            <input type="checkbox" onChange={() => { setCharAllow(pre => !pre) }} />
            <label htmlFor="">: Character</label>

          </div>
        </div>
      </div>
    </>
  )
}
export default App
