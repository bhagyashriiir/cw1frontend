const BASE = "https://cwbackend-4yel.onrender.com";  // root API not /lessons

// GET all lessons
async function getLessons() {
  const res = await fetch(`${BASE}/lessons`);
  return res.json();
}

// UPDATE spaces
async function updateSpaces(id, spaces) {
  const res = await fetch(`${BASE}/lessons/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ spaces })
  });
  return res.json();
}

// SEARCH lessons
async function searchLessons(q) {
  const res = await fetch(`${BASE}/search?q=` + encodeURIComponent(q));
  return res.json();
}

// SAVE ORDER
async function saveOrder(order) {
  const res = await fetch(`${BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });
  return res.json();
}
