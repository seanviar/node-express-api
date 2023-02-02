import routerProductos from './routerProductos.js';
import routerUsuarios from './routerUsuarios.js';
import routerCategorias from './routerCategorias.js';
import routerNuevaRuta from './routerNuevaRuta.js'
import Express from 'express';

function routerApi(app) {
  const router = Express.Router()
  app.use('/api/v1',router)
  router.use('/productos', routerProductos);
  router.use('/usuarios', routerUsuarios);
  router.use('/categorias', routerCategorias);
  router.use('/nueva-ruta', routerNuevaRuta)
}

export default routerApi;
