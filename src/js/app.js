
setTimeout(function() {
            document.querySelector('.loading-icon').style.display = 'none'; // прячет иконку
            document.querySelector('#inp').style.display = 'block'; // покажет инпут
        }, 5000); // через 5 мин прячет иконку 
        document.addEventListener("keydown", function (event) {
            if (event.key === " " && document.activeElement.tagName === "INPUT") {
              const inputElement = document.activeElement;
              inputElement.value = inputElement.value.slice(0, -1);
              event.preventDefault();
            }
          });
          document.addEventListener("keydown", function (event) {
            if (event.key === "Backspace" && document.activeElement.tagName === "INPUT") {
              const inputElement = document.activeElement;
              inputElement.value += " ";
              event.preventDefault();
            }
          });