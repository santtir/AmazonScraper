document.getElementById("searchBtn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value.trim();
  const resultsDiv = document.getElementById("results");

  if (!keyword) {
    resultsDiv.innerHTML = "<p>Please enter a keyword.</p>";
    return;
  }

  resultsDiv.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await res.json();

    if (data.products?.length > 0) {
      resultsDiv.innerHTML = data.products
        .map(
          (p) => `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="product-card card h-100 p-2">
              <img src="${p.image}" alt="Product Image" class="card-img-top" style="object-fit: contain; max-height: 200px;">
              <div class="card-body">
                <h5 class="card-title" style="font-size: 1rem;">${p.title}</h5>
                <p class="card-text">Rating: ${p.rating}</p>
                <p class="card-text">Reviews: ${p.reviews}</p>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    } else {
      resultsDiv.innerHTML = "<p>No products found.</p>";
    }
  } catch (error) {
    console.error(error);
    resultsDiv.innerHTML = "<p>Error fetching data.</p>";
  }
});
