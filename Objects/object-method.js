let restaurant = {
    name: 'PizzaHut',
    guestCapacity: 75,
    guestCount:0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
}

restaurant.guestCount(72)

console.log(restaurant.checkAvailability(4))
