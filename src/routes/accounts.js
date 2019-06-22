const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const account = require('../models/account')
const createError = require('http-errors')

router.post('/accounts', [
  check('name').isString(),
  check('customer').isString()
], async (req, res, next) => {
  const errors = validationResult(req).array()

  if (errors.length) {
    next(createError(400, `${errors[0].msg}: ${errors[0].param}`))

    return
  }

  let created

  try {
    created = await account.create({
      name: req.body.name,
      customer: req.body.customer
    })
  } catch (e) {
    next(createError(500, e.message))

    return
  }

  res.send(created)
})

router.get('/accounts', async (req, res, next) => {
  let found

  try {
    found = await account.findAll()
  } catch (e) {
    next(createError(500, e.message))

    return
  }

  res.send(found)
})

router.get('/accounts/:id', async (req, res, next) => {
  let found

  try {
    found = await account.findByPk(req.params.id)
  } catch (e) {
    next(createError(500, e.message))

    return
  }

  if (!found) {
    next(createError(404))

    return
  }

  res.send(found)
})

module.exports = router
