const billFor = require('./kata24')

let users = [
  {
    id: 1,
    name: "Employee #1",
    customerId: 1,
    activatedOn: new Date("2018-11-04"),
    deactivatedOn: new Date("2019-01-10")
  },
  {
    id: 2,
    name: "Employee #2",
    customerId: 1,
    activatedOn: new Date("2018-12-04"),
    deactivatedOn: null
  },
]
let subscription = {
  id: 1,
  customerId: 1,
  monthlyPriceInDollars: 4,
}
let mo = "2019-01"
let total = 156.00

let users2 = [
  {
    id: 1,
    name: "Employee #1",
    customerId: 2,
    activatedOn: new Date("2017-07-15"),
    deactivatedOn: new Date("2020-04-10")
  },
  {
    id: 2,
    name: "Employee #2",
    customerId: 2,
    activatedOn: new Date("2018-12-04"),
    deactivatedOn: new Date("2020-01-10")
  },
]
let subscription2 = {
  id: 1,
  customerId: 2,
  monthlyPriceInDollars: 5.33,
}
let mo2 = "2020-01"
let total2 = 207.87

subscriptionNull = null
usersEmpty = []

describe.each`
  u             | sub                 | mo     | tot
  ${users}      | ${subscription}     | ${mo}  | ${total}
  ${users2}     | ${subscription2}    | ${mo2} | ${total2}
  ${usersEmpty} | ${subscriptionNull} | ${mo2} | ${0}
`('With u=$u and sub=$sub and mo=$mo and tot=$tot', ({u, sub, mo, tot}) => {

  it('billing function returns the correct totals for a variety of inputs', () => {
    expect(billFor(mo, sub, u)).toBe(tot)
  })
})
