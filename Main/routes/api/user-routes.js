const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

router.route("/").get(getUsers).post(createUser);


router.route("/").get(getAllUsers).post(createUser);

router.route("/:user/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;