window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  

  // Create a variable for the data given
  let RideInfo = json.rides


  
  // Loop through the ride data
  for (i=0; i<RideInfo.length; i++) {
    //Create a varaible to store each product in memory
    let Ride = (RideInfo[i])
    //Create a variable for the HTML element we're going to add to
    let RideList = document.querySelector (`.rides`)


    //Write the conditionals for services levels
    let Service
    if (Ride.purpleRequested = `true`) {Service = `Noober Purple`}
    else if (Ride.numberOfPassengers >3) {Service = `Noober XL`}
    else {`Noober`}

    //Insert HTML into the products element, using the data from each product
    RideList.insertAdjacentHTML(`beforeend`, ` <div class="p-8">
    <div class="rides container text-center mx-auto"> 
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      ${Service}  </h1>
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
        <p class="font-bold text-gray-600">(312) 555-1212</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${Ride.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p> ${Ride.pickupLocation.address}</p>
        <p> ${Ride.pickupLocation.City}, ${Ride.pickupLocation.state} ${Ride.pickupLocation.zip} </p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${Ride.dropoffLocation.address}</p>
        <p>${Ride.dropoffLocation.City}, ${Ride.dropoffLocation.state} ${Ride.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>

`)

}

  

  
})

