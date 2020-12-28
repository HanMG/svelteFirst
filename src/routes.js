import Home from './routes/Home.svelte'
import Rendering from './routes/Rendering.svelte'
import ControlStatement1 from './routes/ControlStatement1.svelte'
import ControlStatement2 from './routes/ControlStatement2.svelte'
import EventHandling1 from './routes/EventHandling1.svelte'
import EventHandling2 from './routes/EventHandling2.svelte'
import Components from './routes/Components.svelte'
import StoreMain from './routes/Store/StoreMain.svelte'

const routes = {
  '/': Home,
  '/1': Rendering,
  '/2-1': ControlStatement1,
  '/2-2': ControlStatement2,
  '/3-1': EventHandling1,
  '/3-2': EventHandling2,
  '/4': Components,
  '/5': StoreMain
}

export default routes