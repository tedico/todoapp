// The reason why I'm creating this function is because this is where all my side-effects will happen.
// It's like my "container" for side-effects
// I'm aware that calling my view FN will rerender my entire view
// I think I can use something like immutable.js for deep comparison of objects 
// but I'm getting ahead of myself. Let's get this to work before figuring that out.
function app(initModel, update, view, root) {
  let model = initModel // my initial state
  let currentView = view(dispatch, model) // called when there's a state change
  let rootNode = document.createElement(currentView) // I'm expecting this to return a div
  root.appendChild(rootNode)

  function dispatch(msg) { // think state pattern. This is what transitions my state from its initial state to other states
    model = update(msg, model)
    const updatedView = view(dispatch, model)
    rootNode = updatedView
  }
}

export default app
