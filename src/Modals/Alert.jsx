import React from 'react'

function Alert({ title, content, onCancel, buttonText = 'OK' }) {
  return (
    <div className="rih__alert">
      {title ? <h3 className="rih--title">{title}</h3> : null}
      {content ? <div className="rih--content">{content}</div> : null}
      <div className="rih__footer">
        <span className="rih_button" tabIndex={0} role="button" onClick={onCancel}>
          {buttonText}
        </span>
      </div>
    </div>
  )
}

export default Alert
