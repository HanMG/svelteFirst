import Home from './routes/Home.svelte'
import Rendering from './routes/Rendering.svelte'
import ControlStatement1 from './routes/ControlStatement1.svelte'
import ControlStatement2 from './routes/ControlStatement2.svelte'

const routes = {
  '/': Home,
  '/1': Rendering,
  '/2-1': ControlStatement1,
  '/2-2': ControlStatement2
}

export default routes