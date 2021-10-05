let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("we only offer vegan dishes!")
}else if (isGuestOneVegan || isGuestTwoVegan){
    console.log("we offer some vegan dishes!")
} else {
    console.log("we offer anthing in the menu")
}