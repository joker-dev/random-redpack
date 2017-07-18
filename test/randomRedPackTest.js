'use strict'

const randomReadPack = require('../index.js')
const expect = require('chai').expect

describe('# random redPack', function () {
  it('while remainPart is 1 , should return remainMoney', function () {
    const isDecimal = false
    const remainPart = 1
    const remainMoney = 100
    let result = randomReadPack(isDecimal, remainPart, remainMoney)
    expect(result).to.equal(remainMoney)
  })

  it('while remainPart !==1 && money should >= minMoney && <= remainMoney / remainParts * 2', function () {
    const isDecimal = true
    const remainPart = 33
    const remainMoney = 100
    let result = randomReadPack(isDecimal, remainPart, remainMoney)
    expect(result >= 0.01 && result <= remainMoney / remainPart * 2).to.equal(true)
  })
})
