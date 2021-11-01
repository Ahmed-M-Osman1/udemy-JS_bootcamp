let restaurant = {
    name: 'PizzaHut',
    guestCapacity: 75,
    guestCount:0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(peopleSeated){
        this.guestCount = this.guestCount + peopleSeated
    },
    removeParty: function(peopleLeave){
        this.guestCount = this.guestCount - peopleLeave
    },
}

restaurant.seatParty(72)

console.log(restaurant.checkAvailability(4))

restaurant.removeParty(2)

console.log(restaurant.checkAvailability(4))