function upDate(previewPic) {
            document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
            document.getElementById("image").innerHTML = previewPic.alt;
        }

function unDo() {
            document.getElementById("image").style.backgroundImage = "none";
            document.getElementById("image").innerHTML = "Hover over an image below to display here.";
        }

 function tabUse() {        
            var options = ["47034/tulips-tulip-bouquet-flowers-bouquet-47034.jpeg", "2560682/pexels-photo-2560682.jpeg", "8898218/pexels-photo-8898218.jpeg", "108608/pexels-photo-108608.jpeg", "3255499/pexels-photo-3255499.jpeg", "8174066/pexels-photo-8174066.jpeg"];
            var images = document.querySelectorAll(".preview");

            for (var i = 0; i < images.length; i++) {
                images[i].setAttribute("tabindex", "0");
                images[i].addEventListener("focus", function(event) {
                    upDate(event.target);
                });
                images[i].addEventListener("blur", function(event) {
                    unDo();
                });
                   console.log("Testing events");
            }
        }