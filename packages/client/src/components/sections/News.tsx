import React from 'react'

export default function News({ page }: any) {
  return (
    <div>
      {page && page.title}
    </div>
  )
}
