import app from './modules/app'
import update from './modules/update'
import model from './modules/model'
import view from './modules/view'


const root = document.getElementById("root") // append the view to this

app(model, view, update, root)