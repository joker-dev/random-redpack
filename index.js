'use strict'

module.exports = function randomRedPack (isDecimal, remainParts, remainMoney) {
  if (remainParts === 1) return remainMoney
  let minMoney = 0.01
  let maxMoney = remainMoney / remainParts * 2
  let money = Math.floor(Math.random() * maxMoney * 100) / 100
  if (!isDecimal) {
    minMoney = 1
    money = Math.floor(money)
  }
  money = money <= minMoney ? minMoney : money
  remainMoney = Math.floor((remainMoney - money) * 100) / 100
  return money
}
