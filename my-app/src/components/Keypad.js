import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:3001/letters') 
      .then(res => res.json())
      .then(json => {
        setLetters(json)
      })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} class={l.key} className={color}>{l.display}</div>
          // OKAY so the first class gives any letters NOT guessed just the class of its name (ex: if 'a' is not guessed, the key
          // 'a' will have class 'a'). if it has been guessed, className will give the key the classes of its letter and color
          // (ex: if 'a' was guessed green, then 'a' will have class 'green a')
          // l.display is the uppercase letter

          // the reason this wasn't working before is because I was using uppercase letters as my key in the db.json file when the user
          // is inputting lowercase letters. therefore to fix this I added a display element in my script.c file that has uppercase letters
          // and the keys element had the lower case letter. i can still display uppercase letters on the website but use lowercase letters
          // for functionality
        )
      })}
    </div>
  )
}
