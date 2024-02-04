
    var form = document.getElementById("form");
    var popupoverlay = document.querySelector(".popup-overlay");

    var addbook = document.querySelector(".addbook");
    var titleInput = document.querySelector(".title");
    var authorInput = document.querySelector(".author");
    var desInput = document.querySelector(".des");

    addbook.addEventListener("click", function (event) {
        event.preventDefault();

        if (titleInput.value && authorInput.value) {
            
            var truncatedDes = desInput.value.slice(0, 600);

            var div = document.createElement("div");
            div.setAttribute("class", "popup-container");

            div.innerHTML = `<h2>${titleInput.value}</h2>
                             <h3>${authorInput.value}</h3>
                             <p style="color:white;text-align:justify">${truncatedDes}</p>
                             <button onclick="Delete(event)" class="del">Delete</button>`;

            var popupStyles = getComputedStyle(document.getElementById("popup"));
            div.style.width = popupStyles.width;
            div.style.height = popupStyles.height;
            div.style.backgroundColor = popupStyles.backgroundColor;
            div.style.borderRadius = popupStyles.borderRadius;
            div.style.padding = popupStyles.padding;

            document.body.appendChild(div);

            titleInput.value = "";
            authorInput.value = "";
            desInput.value = "";

            form.style.display = "none";
            popupoverlay.style.display = "none";
        } else {
            alert("Please fill in all required fields.");
        }
    });

    function Delete(event) {
        event.target.parentElement.remove();
    }

    function add() {
        form.style.display = "block";
        popupoverlay.style.display = "block";
    }

    function cancelbook() {
        form.style.display = "none";
        popupoverlay.style.display = "none";
    }

    popupoverlay.style.display = "none";
