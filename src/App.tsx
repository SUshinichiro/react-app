import React, { useState } from 'react'
import './App.css'

export function Elemental() {
  const perkl_hohoemi = 0.68
  const perkl_elemental = 1.04
  const [cal, setCal] = useState('0')
  const [cal2, setCal2] = useState('0')
  const updateElemental = (val: string) => {
    setCal(val)
    setCal2((Number(val) * perkl_elemental / perkl_hohoemi).toFixed(2).toString())
  }
  const updateHohoemi = (val: string) => {
    setCal2(val)
    setCal((Number(val) * perkl_hohoemi / perkl_elemental).toFixed(2).toString())
  }
  const clear = () => {
    setCal('0')
    setCal2('0')
  }

  return (
    <div className="container">

      <h1 className="container">エレンタールPとほほえみのカロリー換算</h1>
      <div className="row">
        <div className="column">
          <label className="" id="">エレンタール</label>
        </div>
        <div className="column">
          <input className="" type="tel" id="elemental"
            value={cal}
            onChange={(e) => { updateElemental(e.target.value) }}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label className="" id="">ほほえみ</label>
        </div>
        <div className="column">
          <input className="" type="tel" id="hohoemi"
            value={cal2}
            onChange={(e) => { updateHohoemi(e.target.value) }}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <button id="clear"
            onClick={(e) => { clear() }}
          >
            数値クリア</button>
        </div>
      </div>
    </div>
  )
}

export default Elemental