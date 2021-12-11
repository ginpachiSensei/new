// @desc    new user registration
// @route   POST api/users
// @access  Private
async function test(req, res) {
  console.log(req.body);
  res.status(201).json({ messege: "ok" });
}

export { test };
