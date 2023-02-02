import  Express  from "express";

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('hola soy una nueva ruta');
});

export default router
