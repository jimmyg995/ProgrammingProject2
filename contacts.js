document
    .querySelector("#btn-add-contact")
    .addEventListener("click", function() {
        const nameInput = document.querySelector("#name-input");
        addContact(nameInput.value);
        nameInput.value = "";
    });

function addContact(fullName) {
    if (!fullName || !fullName.trim()) return;

    const contactDiv = document.createElemnet("div");
    contactDiv.className = "Contact-Entry";

    contactDiv.addEventListener("dblclick", function() {
        contactDiv.remove();
    });
    
    const nameInitialDiv = document.createElement("div");
    nameInitialDiv.className = "Name-Initial"
    nameInitialDiv.textContent = fullName.charArt(0);

    const fullNameDiv = document.createElement("div");
    fullNameDiv.className = "Full-Name";
    fullNameDiv.textContent = fullName;

    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector("#Contacts-List").append(contactDiv);
}