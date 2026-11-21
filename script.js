const STORAGE_KEY = "cloudtask_tasks_v1";
let tasks = loadTasks();

function loadTasks() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));
}
function render() {
  const filter = document.getElementById("filterSelect").value;
  const visible = tasks.filter(task => filter === "all" || task.status === filter);
  document.getElementById("totalCount").textContent = tasks.length;
  document.getElementById("completedCount").textContent = tasks.filter(t => t.status === "completed").length;
  document.getElementById("pendingCount").textContent = tasks.filter(t => t.status === "pending").length;
  const list = document.getElementById("taskList");
  const empty = document.getElementById("emptyState");
  list.innerHTML = visible.map(task => `
    <li class="task-item">
      <input class="task-check" type="checkbox" aria-label="Mark task complete" data-toggle="${task.id}" ${task.status === "completed" ? "checked" : ""}>
      <div class="task-main">
        <div class="task-title ${task.status === "completed" ? "done" : ""}">${escapeHtml(task.title)}</div>
        <div class="task-meta"><span class="priority ${escapeHtml(task.priority)}">${escapeHtml(task.priority)} priority</span><span class="task-date">${escapeHtml(task.createdAt)}</span></div>
      </div>
      <button class="delete-btn" data-delete="${task.id}" aria-label="Delete task">✕</button>
    </li>`).join("");
  empty.style.display = visible.length ? "none" : "block";
}
document.getElementById("taskForm").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  if (!title) return;
  tasks.unshift({
    id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
    title,
    priority: document.getElementById("priorityInput").value,
    status: "pending",
    createdAt: new Date().toLocaleDateString()
  });
  saveTasks();
  input.value = "";
  render();
});
document.getElementById("taskList").addEventListener("change", event => {
  const id = event.target.dataset.toggle;
  if (!id) return;
  const task = tasks.find(item => item.id === id);
  if (task) task.status = event.target.checked ? "completed" : "pending";
  saveTasks(); render();
});
document.getElementById("taskList").addEventListener("click", event => {
  const id = event.target.dataset.delete;
  if (!id) return;
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(); render();
});
document.getElementById("filterSelect").addEventListener("change", render);
render();
