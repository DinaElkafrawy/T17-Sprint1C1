var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/DinaController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/dina/getDina', productCtrl.getDina);
router.get('/dina/getDina/:productId', productCtrl.getDina);
router.get(
  '/dina/getDinaBelowPrice/:price',
  productCtrl.getDinaBelowPrice
);
router.post('/dina/createDina', productCtrl.createDina);
router.patch('/dina/updateDina/:productId', productCtrl.updateDina);
router.delete('/dina/deleteDina/:productId', productCtrl.deleteDina);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
