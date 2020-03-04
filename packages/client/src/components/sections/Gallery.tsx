import React from 'react'

export default function Gallery({ page }: any) {
  return (
    <div>
      {page && page.title}
    </div>
  )
}
