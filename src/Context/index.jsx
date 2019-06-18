import React, { useContext, useReducer, useCallback, useEffect } from 'react'

import Modals from '../Modals'

import queueReducer, { INITIAL_STATE } from '../reducer'
import * as types from '../types'

const InteractionContext = React.createContext()

export function useInteraction() {
  const context = useContext(InteractionContext)
  if (context === undefined) {
    throw new Error('useInteraction must be used within a InteractionContext.Provider')
  }
  return context
}

function useListener(listener, dispatch, ACTION_TYPE, duration = 2000) {
  useEffect(() => {
    let timer
    if (listener && listener.active) {
      timer = setTimeout(() => {
        dispatch({ type: types.DESTROY_ITEM, id: listener.id })
      }, listener.duration || duration)
    }

    return () => clearTimeout(timer)
  }, [listener, dispatch, duration])

  return useCallback(
    config => {
      dispatch({ type: ACTION_TYPE, ...config })
    },
    [dispatch, ACTION_TYPE]
  )
}

function useQueue({ duration }) {
  const [state, dispatch] = useReducer(queueReducer, { ...INITIAL_STATE, duration })
  const toast = useListener(state.toast, dispatch, types.CREATE_TOAST, state.duration)
  const alert = useCallback(config => dispatch({ type: types.CREATE_ALERT, ...config }), [dispatch])
  const confirm = useCallback(config => dispatch({ type: types.CREATE_CONFIRM, ...config }), [
    dispatch,
  ])
  const actionSheet = useCallback(
    config => dispatch({ type: types.CREATE_ACTION_SHEET, ...config }),
    [dispatch]
  )
  const loading = useCallback(config => dispatch({ type: types.CREATE_LOADING, ...config }), [
    dispatch,
  ])
  const loaded = useCallback(() => dispatch({ type: types.DESTROY_ITEM, id: state.loading.id }), [
    dispatch,
    state.loading.id,
  ])

  const destroy = useCallback(modalId => dispatch({ type: types.DESTROY_ITEM, id: modalId }), [
    dispatch,
  ])

  return {
    state,
    alert,
    confirm,
    actionSheet,
    toast,
    loading,
    loaded,
    destroy,
  }
}

function InteractionProvider(props) {
  const { duration } = props
  const { state, destroy, ...actions } = useQueue({ duration })
  return (
    <InteractionContext.Provider value={actions}>
      {props.children}
      <Modals {...state} destroy={destroy} />
    </InteractionContext.Provider>
  )
}

export default InteractionProvider
