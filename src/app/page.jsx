import { data } from 'autoprefixer'
import { log } from 'console'
import React from 'react'


export async function animes() {
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const data = await res.json()

  return {
    props: {
      animes: data
    }
  } 
}

const page = ({animes}) => {
  return (
    <div>
      {animes}
    </div>
  )
}

export default page

