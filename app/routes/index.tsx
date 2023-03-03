import { useIsomorphicLayoutEffect } from 'react-use'

export default function Index() {
  useIsomorphicLayoutEffect(() => {
    require('css-paint-polyfill')
    CSS.paintWorklet.addModule('worklets/paint/box')
  }, [])

  return (
    <div>
      <h1>Testing Houdini Polyfill</h1>
      <div
        style={{
          width: 500,
          height: 400,
          background: 'paint(box)',
          border: '1px solid blue',
        }}
      />
    </div>
  )
}
