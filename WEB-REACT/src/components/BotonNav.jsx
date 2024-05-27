import React from 'react'

const BotonNav = ({nombreNav, url}) => {
  return (
    <div style={{ paddingTop: '12px' }}>
      <a className="nav-link" href={url}>{nombreNav}</a>
    </div>
  )
}

export default BotonNav
