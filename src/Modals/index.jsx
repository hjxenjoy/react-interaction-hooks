import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import Toast from './Toast'
import Loading from './Loading'
import Alert from './Alert'
import Confirm from './Confirm'
import ActionSheet from './ActionSheet'

import './index.css'

function Modals(props) {
  const modalsRoot = useRef()
  if (!modalsRoot.current) {
    modalsRoot.current = document.createElement('div')
    modalsRoot.current.className = 'react-interaction-h5__wrapper'
    document.body.appendChild(modalsRoot.current)
  }

  const modals = (
    <React.Fragment>
      {props.alert.active && (
        <Alert
          {...props.alert}
          onCancel={() => {
            if (typeof props.alert.onClose === 'function') {
              props.alert.onClose()
            }
            props.destroy(props.alert.id)
          }}
        />
      )}
      {props.confirm.active && (
        <Confirm
          {...props.confirm}
          onCancel={() => {
            if (typeof props.confirm.onCancel === 'function') {
              props.confirm.onCancel()
            }
            props.destroy(props.confirm.id)
          }}
          onSure={index => {
            if (typeof props.confirm.onSure === 'function') {
              props.confirm.onSure(index)
            }
            props.destroy(props.confirm.id)
          }}
        />
      )}
      {props.actionSheet.active && (
        <ActionSheet
          {...props.actionSheet}
          onSelect={(index, option) => {
            if (typeof props.actionSheet.onSelect === 'function') {
              props.actionSheet.onSelect(index, option)
            }
            props.destroy(props.actionSheet.id)
          }}
        />
      )}
      {props.toast.active && <Toast {...props.toast} />}
      {props.loading.active && <Loading {...props.loading} />}
    </React.Fragment>
  )

  return ReactDOM.createPortal(modals, modalsRoot.current)
}

export default Modals
