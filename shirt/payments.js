let sub = localStorage.getItem("course");
let mode = localStorage.getItem("mode");
let email = localStorage.getItem("email");

let check=localStorage.getItem("userwise");
console.log(check);
if (check === "1") {


    let pemail=localStorage.getItem("email");
    async function checkUserAccess() {
    
       let response = await fetch('users.json');
        let users = await response.json();
        let user = users.find(u => u.email === pemail);
    
        let k=`${sub} ${mode} Certificate`;
        
        localStorage.setItem("userwise Certificate",user[`${k}`]);
        console.log(user[`${k}`]);
    }
    checkUserAccess();
    

    window.location.href = `./proacess/${sub}.html`;
} else {
    
    console.log(email);

document.getElementById('now').innerText = sub + " ( " + mode + " ) ";

let title = document.getElementById('title');
let title1 = document.getElementById('title1');
let cost = localStorage.getItem("cost");



















if (mode === "Recorded Mode") {
    title.innerText = "Pay ₹" + (cost * 60 / 100) + " via UPI";
    title1.innerText = "Scan QR Code below to pay ₹" + (cost * 60 / 100) + " through your UPI app.";
} else {
    title.innerText = "Pay ₹" + cost + " via UPI";
    title1.innerText = "Scan QR Code below to pay ₹" + cost + " through your UPI app.";
}

let img = document.createElement("img");
img.src = `./${mode}/${sub}.jpg`;
img.alt = "Server busy";
img.width = 200;
document.getElementById("image-container").appendChild(img);











window.onload = function() {
if (!localStorage.getItem("email") || !localStorage.getItem("course") || !localStorage.getItem("mode")) {
window.location.href = "./login.html";
} else {
 
document.getElementById('email').value = localStorage.getItem("email");
document.getElementById('paymentcourse').value = localStorage.getItem("course");
document.getElementById('paymentmode').value = localStorage.getItem("mode");
}
};
}






























document.getElementById("PaymentsForm").addEventListener("submit", async function(event) {
    let isValid = true;
    let phone = document.getElementById("phone").value;
    let utr = document.getElementById("utr").value;
    let presentemail = document.getElementById('email').value;

    try {
        if(!/^\d{10}$/.test(phone)) {
            document.getElementById('phonetext').innerText = "Enter a valid 10-digit phone number!";
            isValid = false;
        }

        if(!/^\d{12}$/.test(utr)) {
            document.getElementById('utrtext').innerText = "Enter a valid 12-digit utr number!";
            isValid = false;
        }

        if(isValid) {
            // Disable form fields for submission
            document.getElementById('email').disabled = false;
            document.getElementById('paymentcourse').disabled = false;
            document.getElementById('paymentmode').disabled = false;
            
            this.submit();

        } else {
            event.preventDefault();  // Prevent form submission if validation fails
        }
    } catch(error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data. Please try again later.");
    }
});

