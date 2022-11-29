// code your solution here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun()
saturdayFun("practice coding")

const mondayWork = function (activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}
mondayWork()
mondayWork("practice coding")

function wrapAdjective(string = "*"){
    return function(name = "special"){
        return `You are ${string}${name}${string}!`
    }   

}
wrapAdjective("%")("a committed Christian")


