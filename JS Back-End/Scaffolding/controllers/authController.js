const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest } = require("../middlewares/guards");

router.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register" });
});
router.post(
  "/register",
  isGuest(),
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
  body("rePass").custom((value, { req }) => {
    if (value != req.body.password) {
      throw new Error("Passwords don\t match!");
    }
    return true;
  }),
  async (req, res) => {
    const { errors } = validationResult(req);
    errors.map((e) => e.msg);
    try {
      if (errors.length > 0) {
        throw new Error("Validation error: ");
      }
      await req.auth.register(req.body.username, req.body.password);
      res.redirect("/");
    } catch (err) {
      const ctx = {
        title: "Register",
        errors,
        userData: {
          username: req.body.username,
        },
      };
      res.render("register", ctx);
    }
  }
);
router.get("/login", isGuest(), (req, res) => {
  res.render("login", { title: "Login" });
});
router.post("/login", isGuest(), async (req, res) => {
  try {
    await req.auth.login(req.body.username, req.body.password);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    if (err.type == "credential") {
      err.message = "Wrong username or password";
    }
    const ctx = {
      title: "Login",
      errors: [err.message],
      userData: {
        username: req.body.username,
      },
    };
    res.render("login", ctx);
  }
});
router.get("/logout", (req, res) => {
  req.auth.logout();
  res.redirect("/");
});

module.exports = router;
