import * as React from 'react'

export interface ProviderProps {
  duration?: number
}

declare class ReactInteractionProvider extends React.Component<ProviderProps> {}

export default ReactInteractionProvider

export interface AlertConfig {
  title?: string
  content?: string
  buttonText?: string
  onClose?: () => void
}

export interface ConfirmButtons {
  0: string
  1: string
}

export interface ConfirmConfig {
  title?: string
  content?: string
  buttonTexts?: ConfirmButtons
  cancelIndex?: number
  onSure?: (index: number) => void
  onCancel?: () => void
}

export interface ToastConfig {
  title?: string
  duration?: number
}

export interface LoadingConfig {
  title?: string
}

export interface ActionSheetConfig {
  title?: string
  content?: string
  cancelIndex?: number
  options: Array<string>
  onSelect: (index: number, option: string) => void
}

export interface Hooks {
  alert: (config: AlertConfig) => void
  confirm: (config: ConfirmConfig) => void
  toast: (config: ToastConfig) => void
  loading: (config: LoadingConfig) => void
  loaded: () => void
  actionSheet: (config: ActionSheetConfig) => void
}

declare module 'react-interaction-hooks' {
  function useInteraction(): Hooks
}
