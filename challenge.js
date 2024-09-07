// Good Luck! You got this 💪🏾
// Write your code here.

function calculateBMI(weight, height){
  return weight / (height * height);
}
// Ali's BMI

const Aliweight = 70
const Aliheight = 1.65

const AliBMI = calculateBMI(Aliweight, Aliheight)

// Mohamed's BMI

const Mohamedweight = 80
const Mohamedheight = 1.70

const MohamedBMI = calculateBMI(Mohamedweight, Mohamedheight)

//compare 

if (AliBMI > MohamedBMI){
    console.log ("Ali has higher BMI than Mohamed")
}
else if (AliBMI < MohamedBMI){
    console.log ("Mohamed has higher BMI than Ali")
}
else {
    console.log("Both Mohamed and Ali has same BMI")
}

console.log(`Ali's BMI ${AliBMI}`)
console.log(`Mohamed's BMI ${MohamedBMI}`)

