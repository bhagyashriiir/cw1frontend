const BASE = "http://localhost:3000";

 
// GET all lessons
async function getLessons() {
  const res = await fetch(`${BASE}/lessons`);
  return res.json();
}
 
// PUT update lesson spaces
async function updateSpaces(id, spaces) {
  const res = await fetch(`${BASE}/lessons/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ spaces })
  });
  return res.json();
}

// Search lessons 
async function searchLessons(q) {
  const res = await fetch(`${BASE}/search?q=` + encodeURIComponent(q));
  return res.json();
}


// POST save new order
async function saveOrder(order) {
  const res = await fetch(`${BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });
  return res.json();
}

