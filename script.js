let btn = document.getElementById("generatorbtn");
let marksInput = document.getElementById("marks");
let marksvalue = document.getElementById("markvalue");


//marks value show 
marksInput.addEventListener("input", function () {
    marksvalue.innerText = marksInput.value;
})

//  <--Zoom-in Animation for Detail Card -->

btn.addEventListener("click", function () {

    // your existing code to read values...

    // your existing code to show card text...

    // ⭐ ADD THIS PART AT THE END OF THE CLICK FUNCTION
    let card = document.getElementById("Studentcard");

    card.classList.remove("zoom-animate"); // reset animation
    void card.offsetWidth; // force browser to restart animation
    card.classList.add("zoom-animate"); // apply animation

  
    

          // CONFETTI CELEBRATION 
confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.7 }
});






});


//get value 
btn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    //gender
    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "--"; //ternary operator ( condition ? true : false )

    //course
    let selectedcourses = document.querySelectorAll('input[type="checkbox"]:checked');
    let course = [];
    selectedcourses.forEach((c) => course.push(c.value));



    //marks

    let marks = marksInput.value;

    //show card

    document.getElementById("cardname").innerHTML = name || "student name    ";
    document.getElementById("cardroll").innerHTML = roll ? "Roll No : " + roll : "Roll NO:--";
    document.getElementById("cardEmail").innerHTML = email ? "Email : " + email : "Email:--";
    document.getElementById("cardAge").innerHTML = age ? "age : " + age : "age:--";
    document.getElementById("cardgender").innerHTML = "gender : " + gender;
    document.getElementById("cardcourse").innerText = course.length ? "Course : " + course.join(" || ") : "course:--";
    document.getElementById("cardMarks").innerText = "marks : " + marks + "/100";

    //image

    const photoInput = document.getElementById("photo");
    const cardimage = document.getElementById("cardImage");

    if (photoInput.file && photoInput.file[0]) {
        const reder = new FileReader();
        reder.onload = function (e) {
            cardimage.src = e.target.result;
        }
        reder.readAsDataURL(photoInput.file[0]);
    } else {
        cardimage.src = "https://picsum.photos/200"

        

    }
});