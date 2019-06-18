# react-interaction

React Interaction Hooks like toast/loading/alert/confirm/action-sheet

## demo

```sh
npm start
```

## install

```sh
npm install --save react-interaction-hooks
```

## use

- step 1. Wrap Provider

```js
import InteractionProvider from 'react-interaction-hooks'

ReactDOM.render(
  <InteractionProvider>
    <App />
  </InteractionProvider>,
  root
)
```

- step 2. use it

```js
import React from 'react'
import { useInteraction } from 'react-interaction-hooks'

function App() {
  const { alert, confirm, toast, loading, loaded, actionSheet } = useInteraction()

  function alertHandle() {
    alert({
      buttonText: 'Are You OK?',
      title: 'You Clicked Alert',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fugit!',
      onClose() {
        toast({ title: 'You Closed Alert' })
      },
    })
  }

  function confirmHandle() {
    confirm({
      title: 'You Click Confirm',
      content: 'Please Choose one Button below',
      cancelIndex: 1,
      buttonTexts: ['Yeah!', 'Sad.'],
      onSure(index) {
        toast({ title: `You Clicked OK ${index}`, duration: 1500 })
      },
      onCancel() {
        toast({ title: 'You Clicked Cancel', duration: 1500 })
      },
    })
  }

  function toastHandle() {
    toast({ title: 'Toast...' })
  }

  function loadingHandle() {
    loading({ title: 'disappear after 2s' })

    setTimeout(() => {
      loaded()
    }, 2000)
  }

  function actionSheetHandle() {
    actionSheet({
      title: 'Action Sheet',
      content: 'Please Click One Button',
      options: ['Button One', 'Button Two', 'Button Three', 'Cancel'],
      cancelIndex: 3,
      onSelect(index, option) {
        alert({ content: `You Clicked Button ${index + 1}`, title: option })
      },
    })
  }

  return (
    <div className="example">
      <h1>React Interaction Example</h1>
      <p>
        <button onClick={alertHandle}>alert</button>
      </p>
      <p>
        <button onClick={confirmHandle}>confirm</button>
      </p>
      <p>
        <button onClick={toastHandle}>toast</button>
      </p>
      <p>
        <button onClick={loadingHandle}>loading</button>
      </p>
      <p>
        <button onClick={actionSheetHandle}>action sheet</button>
      </p>
    </div>
  )
}

export default App
```
