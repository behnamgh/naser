import React from 'react'

export default function HomePage({ page }: any) {
  return (
    <div className="header">
      <video autoPlay loop muted width="320" height="240" className="homepage-video">
        <source src="/videos/mainpage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </div>
  )
}
