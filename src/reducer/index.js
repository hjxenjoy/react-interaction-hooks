import * as types from '../types'

function r(prefix) {
  return `${prefix}-${Math.random()
    .toString(16)
    .substr(2, 4)}`
}

export const INITIAL_STATE = {
  duration: 1500,
  actionSheet: {
    id: r('action-sheet'),
    active: false,
    count: 0,
  },
  alert: {
    id: r('alert'),
    active: false,
    count: 0,
  },
  confirm: {
    id: r('confirm'),
    active: false,
    count: 0,
  },
  loading: {
    id: r('loading'),
    active: false,
    count: 0,
  },
  toast: {
    id: r('toast'),
    active: false,
    count: 0,
  },
}

const hash = {
  [INITIAL_STATE.actionSheet.id]: 'actionSheet',
  [INITIAL_STATE.alert.id]: 'alert',
  [INITIAL_STATE.confirm.id]: 'confirm',
  [INITIAL_STATE.loading.id]: 'loading',
  [INITIAL_STATE.toast.id]: 'toast',
}

function queueReducer(state = { ...INITIAL_STATE }, action) {
  const { type, ...payload } = action
  switch (action.type) {
    case types.CREATE_ACTION_SHEET:
      return {
        ...state,
        actionSheet: {
          ...state.actionSheet,
          ...payload,
          active: true,
          count: state.actionSheet.count + 1,
        },
      }
    case types.CREATE_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          ...payload,
          active: true,
          count: state.alert.count + 1,
        },
      }
    case types.CREATE_CONFIRM:
      return {
        ...state,
        confirm: {
          ...state.confirm,
          ...payload,
          active: true,
          count: state.confirm.count + 1,
        },
      }
    case types.CREATE_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          ...payload,
          active: true,
          count: state.loading.count + 1,
        },
      }
    case types.CREATE_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          ...payload,
          active: true,
          count: state.toast.count + 1,
        },
      }
    case types.DESTROY_ITEM:
      return {
        ...state,
        [hash[action.id]]: {
          id: action.id,
          active: false,
          count: state[hash[action.id]].count,
        },
      }
    default:
      return state
  }
}

export default queueReducer
