function FonctionImage(img) {

    if (img.getAttribute("src") === "image1.jpg") {
      img.setAttribute("src", "image2.jpg");
      img.setAttribute("width", "500");
      img.setAttribute("height", "500");

    } else {

      img.setAttribute("src", "image1.jpg");
      img.setAttribute("width", "250");
      img.setAttribute("height", "250");

    }

  }
  
  function FonctionText(text) {

    if (text.innerHTML === "Passe sur moi") {
      text.innerHTML = "Aie";

    } else {

      text.innerHTML = "Passe sur moi";

    }
    
  }