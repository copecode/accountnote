var express = require("express");
const shortid = require("shortid");
const path = require("path");
const accountlog = require("../../data/models/accountlog");
const { default: mongoose } = require("mongoose");

const router = express.Router();
/* GET home page. */
router.get("/account", function (req, res, next) {
  res.render("account");
});

router.get("/del:id", function (req, res, next) {
    accountlog.delete(req.params.id);

  res.render("message", { path: "/checkaccount", option: "查账" });
});

router.get("/checkaccount", function (req, res, next) {
  //读取数据文件
   accountlog.read().then(data => {     res.render("checkaccount", { data: data});
  })




});

router.post("/account", function (req, res, next) {
  console.log(req.body);
  //生成id主键
  let id = shortid.generate();


     accountlog.write({ id: id, ...req.body }),
  

  res.render("message", { path: "/account", option: "记账" });
});

module.exports = router;

