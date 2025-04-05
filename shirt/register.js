document.getElementById("registerForm").addEventListener("submit", async function(event) {

    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let phone = document.getElementById("ph_no").value;
    let presentemail=document.getElementById('email').value;
   
    try{
        let response = await fetch('users.json');
        let users = await response.json();
        let user = users.find(u => u.email === presentemail);
        if(user)
        {
         document.getElementById('emailtext').innerText="Email alredy exist ";
         return;
        }
    if (password !== repassword) {
        document.getElementById('passwordtext').innerText="Passwords do not match!";
        event.preventDefault(); 
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
       // alert("Enter a valid 10-digit phone number!");
        document.getElementById('ph_notext').innerText="Enter a valid 10-digit phone number!";
        event.preventDefault(); 
        return;
    }
    localStorage.clear();
    
    localStorage.setItem("email",presentemail);
    localStorage.setItem("password",password);
   
    alert("sucess");
    window.location.href = `./login.html`;
    }catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data. Please try again later.");
    }

});