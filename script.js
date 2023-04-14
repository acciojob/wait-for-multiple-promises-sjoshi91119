//your JS code here. If required.
const promises = [
    new Promise(resolve => setTimeout(() => resolve("Promise 1"), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 2"), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 3"), Math.random() * 2000 + 1000))
  ];

  const startTime = performance.now();
  Promise.all(promises)
    .then(results => {
      const endTime = performance.now();
      const totalDuration = ((endTime - startTime) / 1000).toFixed(3);

      const loadingRow = document.getElementById("loading-row");
      loadingRow.parentNode.removeChild(loadingRow);

      const tableBody = document.querySelector("table tbody");
      results.forEach((result, index) => {
        const duration = ((performance.now() - startTime) / 1000).toFixed(3);
        const row = tableBody.insertRow(index);
        row.insertCell(0).textContent = result;
        row.insertCell(1).textContent = duration;
      });

      const totalRow = tableBody.insertRow();
      totalRow.insertCell(0).textContent = "Total";
      totalRow.insertCell(1).textContent = totalDuration;
    });