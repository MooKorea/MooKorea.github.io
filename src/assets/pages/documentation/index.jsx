import React, {useEffect, useState} from 'react'

export default function Documentation() {
  const [html, setHTML] = useState()
  useEffect(() => {
    async function fetchData() {
      const data = await fetch('docs/call-cnvs.html')
      const res = await data.text()
      setHTML(res)
    }

    fetchData()
  })
  return (
    <div
      dangerouslySetInnerHTML={{__html: html}}
    />  )
}

