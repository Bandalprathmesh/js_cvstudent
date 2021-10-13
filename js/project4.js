console.log("hello student application");

let data = [
    {
        name:"Prathmesh",
        age:22,
        city:"jejuri",
        language:"python",
        framework:"django",
        image:'https://randomuser.me/api/portraits/men/71.jpg'
    },

    {
        name:"sham",
        age:24,
        city:"pune",
        language:"html",
        framework:"js",
        image:'https://randomuser.me/api/portraits/men/72.jpg'
    },
    
    {
        name:"ram",
        age:23,
        city:"saswad",
        language:"c",
        framework:"js",
        image:'https://randomuser.me/api/portraits/men/73.jpg'
    },
    
    {
        name:"ganesh",
        age:22,
        city:"jejuri",
        language:"python",
        framework:"flask",
        image:'https://randomuser.me/api/portraits/men/74.jpg'
    },
    
    {
        name:"hari",
        age:25,
        city:"jejuri",
        language:"cpp",
        framework:"cpp",
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    },
    
    {
        name:"vishnu",
        age:28,
        city:"satara",
        language:"python",
        framework:"flask",
        image:'https://randomuser.me/api/portraits/men/77.jpg'
    },
    
    
]


function cvItretor(profile){

    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profile.length?
            {value: profile[nextIndex++],done:false}:
            {done: true}

        }
    };

}


const next = document.getElementById('nexts');
next.addEventListener('click',nextcv);

const student= cvItretor(data);
nextcv();
function nextcv(){
 
    const curruntstudent = student.next().value;
    let image =document.getElementById('image');
    
    let profile =document.getElementById('profile');
    if (curruntstudent != undefined){

    image.innerHTML =`<img src='${curruntstudent.image}'>`;


    profile.innerHTML=`<ul class="list-group text-center">
    <li class="list-group-item "> name: ${curruntstudent.name}</li>
    <li class="list-group-item">age is :${curruntstudent.age}</li>
    <li class="list-group-item">lives:${curruntstudent.city}</li>
    <li class="list-group-item"> working language:${curruntstudent.language}</li>
    <li class="list-group-item"> framework:${curruntstudent.framework}</li>
    </ul>`;
}
else{
    alert("end of candidate");
    window.location.reload();
}
}
