import { useDeno } from 'framework/react'
import React, {SyntheticEvent, useState} from 'react'
import Logo from '~/components/logo.tsx'
import useCounter from '~/lib/useCounter.ts'

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()
  const [name, setName] = useState("init");

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Welcome to use <strong>Aleph.js</strong>!</h1>
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && (
          <em>...</em>
        )}
        {!isSyncing && (
          <strong>{count}</strong>
        )}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <form onSubmit={() => {alert(name);}}>
        {/* TODO any */}
        <input type="text" name="name" value={name} onChange={(event: React.ChangeEvent<any>) => setName(event.target.value)} />
      </form>
    </div>
  )
}
