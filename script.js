

const cargoList = [
    {
      id: "CARGO001",
      name: "Building Materials",
      status: "In Transit",
      origin: "Moscow",
      destination: "Kazan",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Fragile Cargo",
      status: "Awaiting Shipment",
      origin: "Saint Petersburg",
      destination: "Ekaterinburg",
      departureDate: "2024-11-26",
    },
  ];

  function addCargoToTable(cargo) {
    const cargoTableBody = document.getElementById("cargoTableBody");
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${cargo.id}</td>
          <td>${cargo.name}</td>
          <td>${cargo.status}</td>
          <td>${cargo.origin}</td>
          <td>${cargo.destination}</td>
          <td>${cargo.departureDate}</td>
          <td>
              <select class="form-select">
                  <option selected>${cargo.status}</option>
                  <option>In Transit</option>
                  <option>Awaiting Shipment</option>
                  <option>Delivered</option>
              </select>
          </td>
      `;
    cargoTableBody.appendChild(row);
  }

  cargoList.forEach((cargo) => {
    addCargoToTable(cargo);
  });

  document
    .getElementById("addCargoForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const cargoName = document.getElementById("cargoName").value;
      const origin = document.getElementById("origin").value;
      const destination = document.getElementById("destination").value;
      const departureDate = document.getElementById("departureDate").value;

      if (cargoName && origin && destination && departureDate) {
        const newCargo = {
          id: "CARGO003",
          name: cargoName,
          status: "Awaiting Shipment",
          origin: origin,
          destination: destination,
          departureDate: departureDate,
        };
        cargoList.push(newCargo);
        addCargoToTable(newCargo);
        document.getElementById("addCargoForm").reset();
      }
    });