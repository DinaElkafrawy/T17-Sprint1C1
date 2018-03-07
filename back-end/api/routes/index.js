var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/C1Controller');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/c1/getDina', productCtrl.getDina);
router.get('/c1/getDina/:productId', productCtrl.getDina);
router.get(
  '/c1/getDinaBelowPrice/:price',
  productCtrl.getDinaBelowPrice
);
router.post('/c1/createDina', productCtrl.createDina);
router.patch('/c1/updateDina/:productId', productCtrl.updateDina);
router.delete('/c1/deleteDina/:productId', productCtrl.deleteDina);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;