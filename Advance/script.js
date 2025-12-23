// Load from Local Storage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Button click event
document.getElementById("addBtn").addEventListener("click", addTransaction);

function addTransaction() {
    const desc = document.getElementById("desc").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value.trim();

    if (desc === "" || amount <= 0 || type === "" || category === "") {
        alert("Please fill all fields correctly");
        return;
    }

    const transaction = {
        desc,
        amount,
        type,
        category
    };

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    clearInputs();
    renderAll();
}

function clearInputs() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("type").value = "";
    document.getElementById("category").value = "";
}

function renderAll() {
    displayTransactions();
    displaySummary();
    displayCategorySummary();
}

function displayTransactions() {
    const tbody = document.querySelector("#transactionTable tbody");
    tbody.innerHTML = "";

    transactions.forEach(t => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${t.desc}</td>
            <td>₹${t.amount}</td>
            <td>${t.type}</td>
            <td>${t.category}</td>
        `;
        tbody.appendChild(row);
    });
}

function displaySummary() {
    let income = 0;
    let expense = 0;

    transactions.forEach(t => {
        if (t.type === "income") income += t.amount;
        else expense += t.amount;
    });

    document.getElementById("totalIncome").innerText = `Total Income: ₹${income}`;
    document.getElementById("totalExpense").innerText = `Total Expense: ₹${expense}`;
    document.getElementById("balance").innerText = `Balance: ₹${income - expense}`;
}

function displayCategorySummary() {
    const categoryTotals = {};
    const list = document.getElementById("categoryList");
    list.innerHTML = "";

    transactions.forEach(t => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    });

    for (let cat in categoryTotals) {
        const li = document.createElement("li");
        li.textContent = `${cat} : ₹${categoryTotals[cat]}`;
        list.appendChild(li);
    }
}

// Initial load
renderAll();