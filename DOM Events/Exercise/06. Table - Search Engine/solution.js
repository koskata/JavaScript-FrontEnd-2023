function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let keyWords = document.getElementById("searchField").value;

      let tbody = document.getElementsByTagName("tbody")[0];

      let tds = Array.from(tbody.getElementsByTagName("td"));

      let activeRows = Array.from(document.querySelectorAll("tbody tr"));

      activeRows.forEach(row => {
         row.classList.remove("select");
      });

      tds.forEach(td => {
         if (td.textContent.includes(keyWords)) {
            let tr = td.parentElement;
            tr.classList.add("select");
         }
      });
   }
}