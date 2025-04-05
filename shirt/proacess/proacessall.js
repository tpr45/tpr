let sub = localStorage.getItem("course");
let mode = localStorage.getItem("mode");

let onlyrm=document.getElementById('onlyrm');

if(mode==="Recorded Mode")
    {
        onlyrm.style.visibility="visible";
    }

    let check=localStorage.getItem("userwise Certificate");

    
    let pemail=localStorage.getItem("email");
    async function checkUserAccess() {
    
       let response = await fetch('users.json');
        let users = await response.json();
        let user = users.find(u => u.email === pemail);
    
        let k=`${sub} ${mode} Certificate Date`;
        
        localStorage.setItem("userwise Certificate Date",user[`${k}`]);
        console.log(user[`${k}`]);
    }
    checkUserAccess();


function test(){
    if(check==="1")
    {
       

        window.location.href=`../Certificate.html`;
    }else{
    window.location.href=`./test/${sub}.html`;
    }
}


function om(){
    let mod="Online Mode";
    localStorage.setItem("mode",mod);
    window.location.href = '../payments.html';

}