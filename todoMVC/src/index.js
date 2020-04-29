import app from './App'
import update from './Update'
import initModel from './Model'
import view from './View'


const root = document.getElementById("root") // append the view to this

app(initModel, update, view, root)