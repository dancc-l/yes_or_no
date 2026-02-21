let images = ["imagenes/01.png","imagenes/02.jpg","imagenes/03.jpg","imagenes/04.jpg","imagenes/05.jpeg"]
let messages = ["¿Vamos juntos? ¿Te animas?", "¿Cómo que no?", "¡No me lo puedo creer!", "Andale di que si.. Porfis..", "Porfisss........!"]
//CAMBIAR IMAGEN y MENSAJE
//Seleccionar elementos
let button_refuse = document.getElementById("button-refuse-invitation")
let button_confirm = document.getElementById("button-confirm-invitation")
let imagen = document.getElementById("imagenes-invitation")
let message = document.getElementById("message")

index=0
actual_width_no = 45
actual_height_no = 120
actual_width_si = 45
actual_height_si= 120


    button_refuse.addEventListener("click", () => {

        if (index < images.length - 1) {
            index++;

            actual_width_no -= 10
            button_refuse.style.width = actual_width_no +"%"

            actual_height_no -= 10
            button_refuse.style.height = actual_height_no +"%"

            actual_width_si += 10
            button_confirm.style.width = actual_width_si +"%"

            actual_height_si += 10
            button_confirm.style.height = actual_height_si +"%"
            
            imagen.src = images[index];
            message.textContent = messages[index];
        }

        if (index >= images.length - 1) {
            button_refuse.style.display = "none";
        }

    })

    button_confirm.addEventListener("click", () => {
        window.location.href="despedida.html";
    })




