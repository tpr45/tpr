document.getElementById('loginForm').onsubmit = async function(event) {
    event.preventDefault(); // Prevent form submission

    let loginemail = document.getElementById('loginemail').value.trim();
    let loginpassword = document.getElementById('loginpassword').value.trim();

    // Retrieve stored credentials
    let storedemail = localStorage.getItem("email");
    let storedpassword = localStorage.getItem("password");

    try {
        let response = await fetch('users.json');
        let users = await response.json();
        let user = users.find(u => u.email === loginemail);

        document.getElementById('emailtext').innerText = "";
        document.getElementById('passwordtext').innerText = "";
        if(user){
            if (user.password === loginpassword) {
                localStorage.clear();
                // Store credentials and redirect
                localStorage.setItem("email", user.email);
                localStorage.setItem("password", user.password);
                localStorage.setItem("name",user["name"]);
                /*
                localStorage.setItem("Html Recorded Mode", user["Html Recorded Mode"]);
                localStorage.setItem("Html Online Mode",user["Html Online Mode"]);
                localStorage.setItem("Css (Basic) Recorded Mode",user["Css (Basic) Recorded Mode"] );
                localStorage.setItem("Css (Basic) Online Mode", user["Css (Basic) Online Mode"]);
                localStorage.setItem("Css (Advanced) Recorded Mode", user["Css (Advanced) Recorded Mode"]);
                localStorage.setItem("Css (Advanced) Online Mode", user["Css (Advanced) Online Mode"]);
                localStorage.setItem("Java Script(Js) Recorded Mode",user["Java Script(Js) Recorded Mode"]);
                localStorage.setItem("Java Script(Js) Online Mode",user["Java Script(Js) Online Mode"]);
                localStorage.setItem("C Language Recorded Mode", user["C Language Recorded Mode"]);
                localStorage.setItem("C Language Online Mode",user["C Language Online Mode"]);
                localStorage.setItem("DSA Recorded Mode", user["DSA Recorded Mode"]);
                localStorage.setItem("DSA Online Mode", user["DSA Online Mode"]);
                localStorage.setItem("C++ Language Recorded Mode",user["C++ Language Recorded Mode"]);
                localStorage.setItem("C++ Language Online Mode", user["C++ Language Online Mode"]);
                localStorage.setItem("Java Recorded Mode",user["Java Recorded Mode"]);
                localStorage.setItem("Java Online Mode",user["Java Online Mode"]);
                localStorage.setItem("Python Recorded Mode",user["Python Recorded Mode"]);
                localStorage.setItem("Python Online Mode",user["Python Online Mode"]);
                localStorage.setItem("Certificate",user["Certificate"]);
                console.log(user["Certificate"]);
                localStorage.setItem("Month",user["Certificate M"]);
                localStorage.setItem("Year",user["Certificate Y"]);
                localStorage.setItem("Date",user["Certificate D"]); 
                localStorage.setItem("name",user["name"]); 
                */
               window.location.href = "index.html";
            }else{
                // Invalid password
                document.getElementById('passwordtext').innerText = "Invalid password";
            }
        } else if(loginemail === storedemail && loginpassword !== storedpassword) {
            // Email not found
            document.getElementById('passwordtext').innerText = "Invalid password";
        }else if(loginemail === storedemail && loginpassword === storedpassword) {
            localStorage.setItem("email",loginemail)
            localStorage.setItem("password",loginpassword)
            window.location.href = "index.html";
        }else{
            if( (loginemail !== storedemail && loginpassword !== storedpassword)&&!user )
            {
                document.getElementById('passwordtext1').innerText = "no user found please register";
            }
        }
    } catch (error) {
       
        alert("Error fetching user data. Please try again later.");
    }
};
