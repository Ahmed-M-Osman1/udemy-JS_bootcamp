const data = {
    locations:[],
    get location(){
  return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code to use data object 
data.location = '      Alex    '
data.location = ' Cairo'

console.log(data)