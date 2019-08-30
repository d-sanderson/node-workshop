const router = require('express').Router();
const usersRouter = require('./user/userRoutes');
const catesRouter = require('./category/categoryRoutes');
const postsRouter = require('./post/postRoutes');

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/users', usersRouter);
router.use('/categories', catesRouter);
router.use('/posts', postsRouter);

module.exports = router;
