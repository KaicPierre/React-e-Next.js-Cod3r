export default function (req, res) {
  res.status(200).json({
    metodo: req.method
  })
}