// this is my controller

// each msg represents an interaction with the view layer
// every message will have its own function
// and I'm passing each prop to its equivalent function

const MSGS = {
  TODO_INPUT: 'TODO_INPUT',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_ALL_TODO: 'REMOVE_ALL_TODO',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
}

// these are the handlers that will fire
// element.addEventListener('event', dispatch(msg))

export function addTodoMsg(todo) {
  return {
    type: MSGS.TODO_INPUT,
    payload
  }
}

export function removeTodoMsg(todo) {
  return {
    type: MSGS.REMOVE_TODO,
    payload
  }
}

export function removeAllTodoMsg([]) {
  return {
    type: MSGS.REMOVE_ALL_TODO,
    payload
  }
}

export function toggleCompletedMsg() {
  return {
    type: MSGS.TOGGLE_COMPLETED,
    payload
  }
}

// update will update my model based on the message
// messages are from my view layer (they represent interactions from the view)
function update(msg, model) {

  switch (msg.type) {

    case TODO_INPUT: {
      return  `updates model: adds a todo to the model`
    }

    case REMOVE_TODO: {
      return `updates model: removes single todo`
    }

    case REMOVE_ALL_TODO: {
      return `updates model: removes all todos`
    }

    case TOGGLE_COMPLETED: {
      return `return updated state (adds a class)`
    }

    default:
      return model // does nothing. Returns the existing state
  }
}

export default update