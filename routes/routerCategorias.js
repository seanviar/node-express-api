import Express  from "express";

const router = Express.Router()

router.get('/:categoriaId/productos/:productoId', (req, res) => {
  const { categoriaId, productoId } = req.params;
  res.json({
    categoriaId,
    productoId,
    tecnologia: { name: 'producto 2', precio: '2000' },
  });
});

export default router
