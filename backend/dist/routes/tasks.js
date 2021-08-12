"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
router.get('/menu', _tasks.getMenu);
router.get('/menu/:id', _tasks.getMenuId);
router.post('/login', _tasks.login);
router.post('/pedido');
router["delete"]('/pedido:id');
router.put('/pedido:id');
var _default = router;
exports["default"] = _default;