"use strict";

function renderPopUpPage() {
    // Get the body element
    const body = document.body;

    // Clear existing content in the body
    body.innerHTML = "";

    // Create the main container
    const main = document.createElement("main");
    main.id = "popUpPage-main";

    // Create pop-up content container
    const popUpContent = document.createElement("div");
    popUpContent.className = "popUp-content";

    // Add text section
    const popUpText = document.createElement("div");
    popUpText.className = "popUp-text";
    popUpText.innerHTML = `
        <h1>Din runda börjar nu</h1>
        <p>Slå tärningen och rör din spel pjäs, <br>landar du på en fråga skriv den i fältet</p>
    `;
    popUpContent.appendChild(popUpText);

    // Add input field section
    const popUpInputField = document.createElement("div");
    popUpInputField.className = "popUp-input-field";

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Brickans nummer";

    const popUpButton = document.createElement("div");
    popUpButton.className = "popUp-button";

    const backButton = document.createElement("button");
    backButton.className = "popUp-go-back";
    backButton.innerHTML = `<img src="../icons/yellowbackarrow.svg" alt="Arrow">`;

    popUpButton.appendChild(backButton);
    popUpInputField.appendChild(inputField);
    popUpInputField.appendChild(popUpButton);
    popUpContent.appendChild(popUpInputField);

    // Add button section
    const button = document.createElement("button");
    button.id = "popUp-btn";
    button.textContent = "Jag landade inte på en bricka";
    popUpContent.appendChild(button);

    // Append everything to the main container
    main.appendChild(popUpContent);

    // Append the main container to the body
    body.appendChild(main);
}

// Call the function to render the pop-up page
renderPopUpPage();
