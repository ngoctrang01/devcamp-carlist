import { gObjectCars,checkCar } from "./info";

function App() {
  return (
    <div >
      <ul>
        {gObjectCars.map((car,index) => {
          return (
            <li key={index}>
              {car.model} - {car.year} - Đây là xe{" "}{checkCar(car) ? "mới" : "cũ" }
              </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
