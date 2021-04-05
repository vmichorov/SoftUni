function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let restaurants = {};

   function onClick() {
      let array = JSON.parse(input.value);
      for (let element of array) {
         let [name, workersArr] = element.split(' - ');
         if (!restaurants.hasOwnProperty(name)) {
            restaurants[name] = {
               name,
               workers: {},
               averageSalary: 0,
               bestSalary: Number.MIN_SAFE_INTEGER,
            };
         }
         workersArr = workersArr.split(', ');
         for (let worker of workersArr) {
            let [workerName, salary] = worker.split(' ');
            restaurants[name].workers[workerName] = Number(salary);
         }
         let entries = Object.entries(restaurants[name].workers);
         for (let entry of entries) {
            restaurants[name].averageSalary += entry[1];
            if (entry[1] > restaurants[name].bestSalary) {
               restaurants[name].bestSalary = entry[1];
            }
         }
         restaurants[name].averageSalary /= Object.keys(restaurants[name].workers).length;
      }
      let entries = Object.entries(restaurants).sort((a, b) => b[1].bestSalary - a[1].bestSalary);
      let bestRestaurant = entries[0];
      let bestWorkers = bestRestaurant[1].workers;
      bestWorkers = Object.entries(bestWorkers).sort((a, b) => b[1] - a[1]);
      document.querySelector('#bestRestaurant>p').textContent +=
         `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
      for (worker of bestWorkers) {
         document.querySelector('#workers>p').textContent += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      }
   }
}