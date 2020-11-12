import { header } from './components/Header'
import { boardList } from './components/BoardList'
import { Router } from './modules/Router'

const app = document.querySelector('.app')
app.append(header.render())

app.append(boardList.render())



const router = new Router();
router 
    .addRoute({name: 'home', path: '/', component: header})
    .addRoute({name: 'boards', path: '/boards', component: boardList})
window.router = router

router.initRoutes()





