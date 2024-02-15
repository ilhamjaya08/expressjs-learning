import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Belajar Membuat REST API dengan Express itu menyenangkan.");
});

export default router;