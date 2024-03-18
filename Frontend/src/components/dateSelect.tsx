'use client'
import { useState } from "react";

export default function DateSelect() {
    const [dates, setDates] = useState({
      start: "2023-01-01",
      end: "2023-12-31"
    })

    const handleChange = (type:string, value:string) => {
      const newDates = dates;
      if (type === 'start') {
        newDates.start = value; 
        console.log("start")
      } else {
        newDates.end = value;
      }

      setDates(newDates)
    }

    async function submitForm() {
        console.log(dates.start)
      }

    return (
        <div className="ml-auto">
        <form>
          Fromㅤ
          <label className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow">
            <input type="date" name="start" min="2021-01-01" max="2023-12-31" onChange={(e) => handleChange('start', e.target.value)} />
          </label>
          ㅤToㅤ
          <label className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow">
            <input type="date" name="end" min="2021-01-01" max="2023-12-31" onChange={(e) => handleChange('end', e.target.value)}/>
          </label>
          <button type="button" onClick={submitForm}>submit</button>
        </form>
      </div>
    )
}