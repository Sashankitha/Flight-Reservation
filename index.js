// Mock flight data
const flights = [
    { id: 1, airline: "Alliance Air", from: "Tirupati", to: "Bangalore", price: "RS 12000" },
    { id: 2, airline: "Air India", from: "Tirupati", to: "Bangalore", price: "RS 15000" },
    { id: 2, airline: "IndiGo", from: "Tirupati", to: "Bangalore", price: "RS 15000" },
    { id: 3, airline: "Qatar Airlines", from: "Tirupati", to: "Bangalore", price: "RS 35000" },
    { id: 4, airline: "Spice jet", from: "irupathi", to: "Bangalore", price: "RS 14000" },
  ];
  
  let selectedFlight = null;
  
  function searchFlights() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
  
    if (!from || !to || !date) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Display flights
    const flightsContainer = document.getElementById("flights-container");
    flightsContainer.innerHTML = "";
    flights.forEach((flight) => {
      const flightCard = document.createElement("div");
      flightCard.className = "card";
      flightCard.innerHTML = `
        <p><strong>${flight.airline}</strong></p>
        <p>${flight.from} to ${flight.to}</p>
        <p>Price: ${flight.price}</p>
      `;
      flightCard.onclick = () => selectFlight(flight);
      flightsContainer.appendChild(flightCard);
    });
  
    // Switch sections
    document.getElementById("search-section").classList.add("hidden");
    document.getElementById("flights-section").classList.remove("hidden");
  }
  
  function selectFlight(flight) {
    selectedFlight = flight;
    document.getElementById("flights-section").classList.add("hidden");
    document.getElementById("passenger-section").classList.remove("hidden");
  }
  
  function submitPassengerDetails() {
    const name = document.getElementById("passenger-name").value;
    const email = document.getElementById("passenger-email").value;
    const phone = document.getElementById("passenger-phone").value;
  
    if (!name || !email || !phone) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Show confirmation details
    document.getElementById("confirmation-details").innerHTML = `
      <p><strong>Flight:</strong> ${selectedFlight.airline} - ${selectedFlight.from} to ${selectedFlight.to} (${selectedFlight.price})</p>
      <p><strong>Passenger:</strong> ${name} - ${email} - ${phone}</p>
    `;
    document.getElementById("passenger-section").classList.add("hidden");
    document.getElementById("confirmation-section").classList.remove("hidden");
  }
  
  function goBackToSearch() {
    document.getElementById("flights-section").classList.add("hidden");
    document.getElementById("search-section").classList.remove("hidden");
  }
  
  function goBackToFlights() {
    document.getElementById("passenger-section").classList.add("hidden");
    document.getElementById("flights-section").classList.remove("hidden");
  }
  
  function startNewSearch() {
    document.getElementById("confirmation-section").classList.add("hidden");
    document.getElementById("search-section").classList.remove("hidden");
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("date").value = "";
  }