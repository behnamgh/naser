import React from 'react'

export default function Header({ page }: any) {
  return (
    <div className="section-header">
      <video autoPlay loop muted width="320" height="240" className="homepage-video">
        <source src="/videos/homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </div>
  )
}
