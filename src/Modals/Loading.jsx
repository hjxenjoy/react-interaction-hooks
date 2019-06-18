import React from 'react'

function Loading({ title }) {
  return (
    <div className="rih__loading">
      {title ? <span className="rih_loading_desc">{title}</span> : null}
    </div>
  )
}

export default Loading
