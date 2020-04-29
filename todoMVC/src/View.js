import {
  addTodoMsg,
  removeTodoMsg,
  removeAllTodoMsg,
  toggleCompletedMsg,
} from './Update'

import {
  div,
  h2,
  ul,
  li,
  input,
  label,
  i,
  form,
} from './Helpers'

function ulView(dispatch, model) {
  return ul(
    li(
      input(`onClick: () => dispatch(toggleCompletedMsg())`),
      label(),
      i(`onClick: () => dispatch(removeTodoMsg())`)
    )
  )
}

function formView(dispatch, model) {
  return(
    form(
      input(text),
      input(`onSubmit: () => dispatch(addTodoMsg)`),
      input(`onSubmit: () => dispatch(removeAllTodos)`),
    )
  )
}

// my view takes in the interactions and model. It displays my model. My controller is update function
function view(dispatch, model) {
  return div(class: 'wrapper', [
    h2(),
    ulView(dispatch, model),
    formView(dispatch, model)
  ])
}

export default view