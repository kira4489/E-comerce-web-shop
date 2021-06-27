let designs = document.getElementById("designs");

function Api() {
  fetch("https://api.mercadolibre.com/sites/MLA/", {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.categories.map((item, index) => {
        if (index >= 6) {
          return;
        }
    designs.innerHTML += `
    <div class="col-12 mb-2 col-md-4 py-5">
    <div class="card" style="width: 18rem;">
      <img src="#" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <a href="#" class="btn btn-primary">Read Description</a>
      </div>
    </div>
  </div>
    `;
      });
    });
}

Api();
