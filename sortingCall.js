
const sortingCall = async(global, data) => {
    
   
    data.AirReservation[0].TravelerInfo.AirTraveler.sort(function(a, b) 
    {
        return (a.TravelerRefNumber.RPH - b.TravelerRefNumber.RPH)
    })
    data.AirReservation[0].TravelerInfo.AirTraveler.sort(function(c, d) {
        return ((c.PassengerTypeCode).toLowerCase() == "chd" ? 1 : -1);
    })
    
}

console.log("sortingCall");

function newFunction() {
    return sortingCall.sort();
}
