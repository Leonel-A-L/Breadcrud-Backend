const router = require('express').Router()
const {
    getAllBread,
    getBreadById,
    createBread,
    deleteBreadById,
    updateBreadById,
} = require('../controllers/bread')
// GET / get all breads
router.get('/', getAllBread)

// GET /:id get bread by id
router.get('/:id', getBreadById)

//POST / creat bread
router.post('/', createBread)

// PUT /:id update
router.put('/:id', updateBreadById)
// DELETE /:id delete bread by id
router.delete('/:id', deleteBreadById)

module.exports = router