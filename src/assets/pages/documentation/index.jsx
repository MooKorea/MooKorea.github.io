import React, {useEffect, useState} from 'react'
import Sidebar from './sidebar'

export default function Documentation() {
  const [HTMLList, setHTMLList] = useState()
  useEffect(() => {
    async function fetchData() {
      const data = await fetch('docs/names/names.txt')
      const res = await data.text()
      setHTMLList(res.split(',').filter(e => e !== 'README.html'))
    }
    fetchData()
  }, [])

  const [page, setPage] = useState(0)
  const handlePageChange = (index) => {
    setPage(index);
    console.log(index)
  }

  const [HTML, setHTML] = useState()
  useEffect(() => {
    console.log(HTMLList)
    async function fetchHTMLFile() {
      if ((HTMLList === undefined)) return;
      const data = await fetch(`docs/${HTMLList[page]}`)
      const res = await data.text()
      setHTML(res)
    }
    fetchHTMLFile()
  }, [HTMLList, page])



  return (
    <main className='documentation'>
      <Sidebar sidebarItems={HTMLList} handlePageChange={handlePageChange}/>
      <div
        dangerouslySetInnerHTML={{__html: HTML}}
      />
    </main>
  )
}

