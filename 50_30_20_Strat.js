// function fiftyThirtyTwenty(ati) {

//     //console.log(ati)

//     let budget = {
//         "Needs": 0,
//         "Wants" : 0,
//         "Savings" : 0
//     }

//     budget.Needs = ati * 0.5
//     budget.Wants = ati * 0.3
//     budget.Savings = ati * 0.2

//    // console.log(budget)



// }

function fiftyThirtyTwenty(ati) {

    let budget = {}

    budget.Needs = ati * 0.5
    budget.Wants = ati * 0.3
    budget.Savings = ati * 0.2

    console.log(budget)

}


fiftyThirtyTwenty(10000) //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


/* NOTES!!!

We need to create an object w/ three key-value pairs

create an empty object? Refere to how gabe created an object

The math will have to be dividing. Test first w/ console logs.

*/