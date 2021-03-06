import React from 'react'

function Confirm({
  title,
  content,
  onCancel,
  onSure,
  cancelIndex = 0,
  buttonTexts = ['Cancel', 'OK'],
}) {
  return (
    <React.Fragment>
      <div className="rih__backdrop" />
      <div
        className="rih__confirm"
        role="dialog"
        aria-labelledby="confirm dialog"
        aria-describedby="confirm dialog"
      >
        {title ? <h3 className="rih--title">{title}</h3> : null}
        {content ? <div className="rih--content">{content}</div> : null}
        <div className="rih__footer">
          <span
            className={`rih_button${cancelIndex === 0 ? ' rih_button_cancel' : ''}`}
            tabIndex={0}
            role="button"
            onClick={() => (cancelIndex === 0 ? onCancel() : onSure(0))}
          >
            {buttonTexts[0]}
          </span>
          <span
            className={`rih_button${cancelIndex === 1 ? ' rih_button_cancel' : ''}`}
            tabIndex={0}
            role="button"
            onClick={() => (cancelIndex === 1 ? onCancel() : onSure(1))}
          >
            {buttonTexts[1]}
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Confirm
