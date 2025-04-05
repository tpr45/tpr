
let course=localStorage.getItem("course");
        let title=document.getElementById('title');
        title.innerText=course;
        document.getElementById('point1').innerText= "This program will help you to learn topics in "+course+" Course";
        if(localStorage.getItem("email")==null)
            {
                window.location.href=`./login.html`;
            }else if(localStorage.getItem("course")===null)
            {
                window.location.href=`./index.html`;
    
            }
           
        switch(course)
        {
            case 'Html':
                localStorage.setItem("cost","100");
                break;
            case 'Css (Basic)':
                localStorage.setItem("cost","250");
                break;
            case 'Css (Advanced)':
                localStorage.setItem("cost","400");
                break;
            case 'Java Script(Js)':
                localStorage.setItem("cost","900");  
                break;
            case 'C Language':
                localStorage.setItem("cost","300");
                break;
            case 'DSA':
                localStorage.setItem("cost","1500");
                break;
            case 'C++ Language':
                localStorage.setItem("cost","350");
                break;
            case 'Java':
                localStorage.setItem("cost","2000");
                break;
            case 'Python':
                localStorage.setItem("cost","2000");
                break;
        }

        function button(temp){   
            localStorage.setItem("mode",temp);
            let pemail=localStorage.getItem("email");
async function checkUserAccess() {

   let response = await fetch('users.json');
    let users = await response.json();
    let user = users.find(u => u.email === pemail);

    let k=`${course} ${temp}`;
    
    localStorage.setItem("userwise",user[`${k}`]); 
    
    console.log(user[`${k}`]);
}
checkUserAccess();

            window.location = `./payments.html`;
            
        }


