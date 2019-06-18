import React from 'react'

function ActionSheet({ title, content, cancelIndex = 0, options = [], onSelect }) {
  return (
    <div className="rih__action-sheet">
      {title ? <h3 className="rih--title">{title}</h3> : null}
      {content ? <div className="rih--content">{content}</div> : null}
      <div className="rih__footer">
        {options.map((option, index) => (
          <span
            key={index}
            className={`rih_button${cancelIndex === index ? ' rih_button_cancel' : ''}`}
            tabIndex={0}
            role="button"
            onClick={() => onSelect(index, option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ActionSheet
