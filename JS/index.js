

const loadButtons=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res)=>res.json())
    .then((data)=>displayButtons(data.categories
    ))
    .catch((err)=>console.log(err))
}

const displayButtons=(data)=>{
    console.log(data)
    let count=0;
   
    const buttonSection= document.getElementById("button-section")
    data.map((singledata)=>{

    const button= document.createElement("button");
    button.innerHTML=
    `
    <button class=" flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg">
    <img class="h-5 w-5 md:h-10 md:w-10" src="${data[count].category_icon}" alt="">
    <h2 class="text-sm md:text-lg font-semibold md:font-bold">${data[count].category}</h2>
    </button>
    `
    buttonSection.append(button)
    count++;
    })
}


loadButtons();