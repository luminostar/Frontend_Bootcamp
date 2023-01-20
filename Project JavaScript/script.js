const btnClick = document.querySelector("button");
btnClick.addEventListener("click", function() {
    const a = document.getElementById("typ").value;
    if( isNaN(a) || a == "") {
        const contain = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "invalid input";
        paragraph.style.color = "red";
        contain.append(paragraph);
    } else if (a == 0) {
        const contain = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "invalid input!";
        paragraph.style.color = "red";
        contain.append(paragraph);
    } else if (a % 3 === 0 && a % 5 === 0) {
        const contain = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "FizzBuzz!";
        contain.append(paragraph);
    } else if (a % 3 === 0) {
        const contain = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "Fizz!";
        contain.append(paragraph);
    } else if (a % 5 === 0) {
        const contain = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "Buzz!";
        contain.append(paragraph);
    } else {
        const contain = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "invalid input!";
        paragraph.style.color = "red";
        contain.append(paragraph);
    }
    
    
    
    
    


});