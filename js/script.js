
// Inisialisasi array untuk menyimpan tugas
toDoList = [];

// function untuk mencegah user mengisi data kosong
function validateInput() {
    // Mengambil nilai dari input
    const todoInput = document.getElementById("input-el").value;
    // Mengambil nilai dari input date
    const dateInput = document.getElementById("date-el").value;
    
    // Validasi input
    if (todoInput === "" || dateInput === "") {
        alert("Please fill in both the task and date fields.");
    } else {
        // Jika valid, tambahkan tugas
        addTask(todoInput, dateInput);
    }
}

function addTask(toDo, dueDate) {
    const toDoItems = {
        task: toDo,
        date: dueDate,
        completed: false
    };
    toDoList.push(toDoItems); // Memasukkan objek ke array
    renderTasks();
    document.getElementById("input-el").value = ""; // Clear input field
    document.getElementById("date-el").value = "";  // Clear date field
}

function deleteCurrentTask() {
    toDoList.pop();
    // Re-render the task list
    renderTasks();
}

function deleteAllTasks() {
    toDoList = [];
    // Re-render the task list
    renderTasks();  
}

function renderTasks() {
    const tbody = document.getElementById("task-table-body");
    tbody.innerHTML = ""; // Clear existing rows

    toDoList.forEach((item, index) => {
        if (!item.completed) { // Hanya tampilkan yang belum completed
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.task}</td>
                <td>${item.date}</td>
                <td>Incomplete</td>
                <td>
                    <button onclick="completeTask(${index})">Complete</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    });
    renderCompletedTasks(); // Render tabel completed
}

function completeTask(index) {
    toDoList[index].completed = true; // Ubah status
    renderTasks(); // Update tampilan
}

function renderCompletedTasks() {
    const completedTbody = document.getElementById("completed-task-table-body");
    if (!completedTbody) return; // Pastikan elemen ada

    completedTbody.innerHTML = "";

    toDoList.forEach(item => {
        if (item.completed) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.task}</td>
                <td>${item.date}</td>
                <td>Complete</td>
                <td>Completed</td>
            `;
            completedTbody.appendChild(row);
        }
    });
}