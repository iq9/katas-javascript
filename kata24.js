'use strict';

function roundToTwoPlaces(num) {
  // MDN's recommended rounding. Avoids the problem with 1.005 rounding
  // to 1 instead of 1.01.
  return +(Math.round(num + 'e+2') + 'e-2')
}

function billFor(month, activeSubscription, users) {
  //  Returns: total monthly bill for the customer, rounded to 2 decimal places.

  // If there are no users or the subscription is not present, the function
  // should return 0 since the customer does not owe anything for that month.
  if (
    activeSubscription === undefined ||
    activeSubscription === null ||
    users === undefined ||
    users === null ||
    users.length === 0
  ) return 0

  // Daily rate for the active subscription tier
  let dailyRate = activeSubscription.monthlyPriceInDollars
  let custId = activeSubscription.customerId

  // Intentionally avoiding any kind of date.parse() JS functions.
  // Parsing Strings into Dates is notoriously unreliable in JS.
  // Passing Integers to the Date() constructor is the most reliable.
  let invoiceYear = parseInt(month.split('-')[0])
  let invoiceMonth = parseInt(month.split('-')[1]) - 1
  let firstDayOfMonth = new Date(invoiceYear, invoiceMonth, 1)

  let customerTotal = 0

  for (let user in users) {
    let subscription = users[user]
    let activated = subscription.activatedOn
    let deactivated = subscription.deactivatedOn
    let day = firstDayOfMonth

    if (subscription.customerId == custId) {
      do {
        day = nextDay(day)

        if (activated < day && (deactivated === null || deactivated > day)) {
          // For each day of the month, identify which users were active that day.
          // Multiply the number of active users for the day by the daily rate.
          customerTotal += dailyRate
        }
      }
      while (day <= lastDayOfMonth(firstDayOfMonth))
    }
  }

  return roundToTwoPlaces(customerTotal)
}


/*******************
* Helper functions *
*******************/

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)

  Input type: Date
  Output type: Date
**/
function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
  Takes a Date object and returns a Date which is the last day
  of that month. For example:

  lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)

  Input type: Date
  Output type: Date
**/
function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
  Takes a Date object and returns a Date which is the next day.
  For example:

  nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
  nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)

  Input type: Date
  Output type: Date
**/
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

let mo = "2019-01"

let subscription = {
  id: 1,
  customerId: 1,
  monthlyPriceInDollars: 4,  // price per active user per month
}

let users = [
  {
    id: 1,
    name: "Employee #1",
    customerId: 1,

    // when this user started
    activatedOn: new Date("2017-11-04"),

    // last day to bill for user
    // should bill up to and including this date
    // since user had some access on this date
    deactivatedOn: new Date("2019-02-10")
  },
  {
    id: 2,
    name: "Employee #2",
    customerId: 1,

    // when this user started
    activatedOn: new Date("2018-12-04"),

    // hasn't been deactivated yet
    deactivatedOn: null
  },
]

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

let usersNull = []

let total = billFor(mo, subscription2, users2)

let totalCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)

console.log(total)
console.log(totalCurrency)

module.exports = billFor