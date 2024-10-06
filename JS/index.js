

const loadButtons=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res)=>res.json())
    .then((data)=>displayButtons(data.categories
    ))
    .catch((err)=>console.log(err))
}

const loadCards=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res)=>res.json())
    .then((data)=>SetTimeout(data.
        pets
        
    ))
    .catch((err)=>console.log(err))
}

const displayButtons=(data)=>{
    //console.log(data)
   
   
    const buttonSection= document.getElementById("button-section")
    data.map((singledata)=>{

    const button= document.createElement("button");
    button.innerHTML=
    `
    <button id="${singledata.id+100}" onclick=handleclick(${singledata.id}) class=" flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg">
    <img class="h-5 w-5 md:h-10 md:w-10" src="${singledata.category_icon}" alt="">
    <h2 class="text-sm md:text-lg font-semibold md:font-bold">${singledata.category}</h2>
    </button>
    `
    buttonSection.append(button)

    button.addEventListener("click",()=>{
      const btn1=document.getElementById("101")
      const btn2=document.getElementById("102")
      const btn3=document.getElementById("103")
      const btn4=document.getElementById("104")
      if(singledata.id+100==btn1.id){
        
        
        btn1.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-full bg-green-100 border-green-400"
        btn2.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn3.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn4.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
      }
      else if(singledata.id+100==btn2.id){
        btn1.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn2.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-full bg-green-100 border-green-400"
        btn3.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn4.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
      }
      else if(singledata.id+100==btn3.id){
        btn1.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn2.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn3.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-full  bg-green-100 border-green-400"
        btn4.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
      }
      else if(singledata.id+100==btn4.id){
        btn1.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn2.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn3.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-lg"
        btn4.classList="flex justify-center border py-1 px-2 md:py-2 md:px-5 items-center  gap-1 md:gap-2 rounded-full bg-green-100 border-green-400"
      }
      
      //alert(singledata.id)
    })
   

    })
}

const arr=["0","cat","dog","rabbit","bird"];
const handleclick=(id)=>{
    
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${arr[id]}`)
    .then((res)=>res.json())
    .then((data)=>SetTimeout(data.data
        
        
    ))
    .catch((err)=>console.log(err))
    
    
}

const displayCard=(data)=>{

    
    
    const cardSection= document.getElementById("card-section")
    cardSection.innerHTML=``
    const imgSection= document.getElementById("img-section")
    if(data.length==0){
            const div=document.createElement("div")
            div.classList="card p-5 shadow-lg border rounded-lg col-span-3 "
            div.innerHTML=`<img class="object-cover" src="./images/error.webp" alt="">`
            cardSection.appendChild(div)
    }
    //console.log(data)

    data.map((singledata)=>{
      //console.log(singledata)
    const card= document.createElement("div");
    card.classList="card p-5 shadow-lg border rounded-lg col-span-3  lg:col-span-1"
    card.innerHTML=
    `
    <div class="">
     <img class="h-full w-full object-cover rounded-lg border"
      src="${singledata.image
      }"
      alt="Pet Image" />
    </div>
      <h2 class="text-lg font-semibold md:font-bold">${singledata.pet_name}</h2>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=48&id=VhlToDIAjOFs&format=png"}" alt="">
      <p>Breed:${singledata.breed }</p>
    </div>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=80&id=udduMUcrHmZa&format=png"}" alt="Date">
      <p>Birth:${singledata.date_of_birth}</p>
    </div>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=80&id=70834&format=png"}" alt="Gender">
      <p>Gender:${singledata.gender}</p>
    </div>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=50&id=7163&format=png"}" alt="Price">
      <p>Price:${singledata.price }$</p>
    </div>

    <hr class="my-2">

    <div class="flex justify-between items-center">
    <button onclick=handleimg(${singledata.petId }) class="btn"><img class="w-6 h-6 " src="${"https://img.icons8.com/?size=50&id=24816&format=png"}" alt="Like"></button>
    <button id="${singledata.petId}" onclick=handleAdopt(${singledata.petId}) class="btn">Adopt</button>
    <button id="${singledata.petId+1000}" onclick=handleDetails(${singledata.petId+1000}) class="btn">Details</button>
    
      
    </div>
    `
    cardSection.appendChild(card)

    })


    // sorting section
    const btn=document.getElementById("sort-button")
    
    btn.addEventListener("click",()=>{

      cardSection.innerHTML=``
      //console.log(data);
    let newarr = data.sort(
        (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
    
    
    //console.log(newarr);
    
    newarr.map((singledata)=>{
      
    const card= document.createElement("div");
    card.classList="card p-5 shadow-lg border rounded-lg col-span-3  lg:col-span-1"
    card.innerHTML=
    `
    <div class="">
     <img class="h-full w-full object-cover rounded-lg border"
      src="${singledata.image
      }"
      alt="Pet Image" />
    </div>
      <h2 class="text-lg font-semibold md:font-bold">${singledata.pet_name}</h2>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=48&id=VhlToDIAjOFs&format=png"}" alt="">
      <p>Breed:${singledata.breed }</p>
    </div>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=80&id=udduMUcrHmZa&format=png"}" alt="Date">
      <p>Birth:${singledata.date_of_birth}</p>
    </div>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=80&id=70834&format=png"}" alt="Gender">
      <p>Gender:${singledata.gender}</p>
    </div>
    <div class="flex gap-2">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=50&id=7163&format=png"}" alt="Price">
      <p>Price:${singledata.price }$</p>
    </div>

    <hr class="my-2">

    <div class="flex justify-between items-center">
    <button onclick=handleimg(${singledata.petId }) class="btn"><img class="w-6 h-6 " src="${"https://img.icons8.com/?size=50&id=24816&format=png"}" alt="Like"></button>
    <button id="${singledata.petId}" onclick=handleAdopt(${singledata.petId}) class="btn">Adopt</button>
    <button id="${singledata.petId+1000}" onclick=handleDetails(${singledata.petId+1000}) class="btn">Details</button>
    
      
    </div>
    `
    cardSection.appendChild(card)

    })


    
})
  
}

const SetTimeout=(data)=>{
  const cardSection=document.getElementById("card-section");
  cardSection.innerHTML=``
  cardSection.classList=" card p-5 shadow-lg border rounded-lggrid justify-center grid-cols-3 gap-5 col-span-4 md:col-span-2 lg:col-span-3 "
  cardSection.innerHTML=`<div class="flex justify-center items-center h-[80vh]"><span class="loading loading-spinner loading-lg"></span></div>`
  setTimeout(()=>{
    cardSection.innerHTML=``
    cardSection.classList="grid justify-center grid-cols-3 gap-5 col-span-4 md:col-span-2 lg:col-span-3 "
    displayCard(data);
    
  },2000)
}

const handleimg=(data)=>{
    console.log(data)

    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${data}`)
    .then((res)=>res.json())
    .then((data)=>showImgSection(data.petData))
    .catch((err)=>console.log(err))
    

}

const showImgSection=(data)=>{
  console.log(data)
  const imgSection=document.getElementById("img-section");
  const div =document.createElement("span")
  div.classList=" gap-2 h-24 w-32 card m-1 shadow-lg border rounded-lg "
  div.innerHTML=`<img class="h-full w-full object-cover rounded-lg" src="${data.image}" alt="">`

  imgSection.appendChild(div)
}

const handleAdopt=(data)=>{

  const body =document.getElementById("body")
  const div =document.createElement("div")
  
  let btn =document.getElementById(data);
  btn.innerText="Adopted"
  btn.disabled = true
  let num=3;
  div.innerHTML=`<dialog id="my_modal_2" class="modal">
        <div  class="modal-box ">
          <h1 class="text-center py-5 text-5xl font-bold">Congrates</h1>
          <p class="text-center font-bold">Adoption Process is Start For Your Pet</p>
          <h1 id="modalh1" class="text-center py-5 text-5xl font-extrabold">${num}</h1>
        </div>
    </dialog>`
    body.appendChild(div)
    document.getElementById('my_modal_2').showModal()

  const clockId=setInterval(()=>{
    //console.log(num);
    num--;
    if(num==0){
      clearInterval(clockId)
    }
    const h1=document.getElementById("modalh1")
    h1.innerText=`${num}`
  },1000)
  
    setTimeout(()=>{
      body.removeChild(div);
    },3000)
}




const handleDetails=(data)=>{
  data=data-1000;
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${data}`)
    .then((res)=>res.json())
    .then((data)=>showModalSection(data.petData))
    .catch((err)=>console.log(err))

  
  
}

const showModalSection=(data)=>{
  console.log(data)
  const Details=document.getElementById("details");
  const div=document.createElement("div")
  Details.innerHTML=``
  
  div.innerHTML=`
  <div class="">
     <img class="h-full w-full object-cover rounded-lg border"
      src="${data.image}"
      alt="Pet Image" />
    </div>
      <h2 class="text-xl py-5 font-semibold md:font-bold">${data.pet_name}</h2>


    <div class="grid grid-cols-2">
    <div class="flex gap-2 col-span-1">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=48&id=VhlToDIAjOFs&format=png"}" alt="">
      <p>Breed:${data.breed      }</p>
    </div>
    <div class="flex gap-2 col-span-1">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=80&id=udduMUcrHmZa&format=png"}" alt="Date">
      <p>Birth:${data.date_of_birth}</p>
    </div>
    <div class="flex gap-2 col-span-1">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=80&id=70834&format=png"}" alt="Gender">
      <p>Gender:${data.gender}</p>
    </div>
    <div class="flex gap-2 col-span-1">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=50&id=7163&format=png"}" alt="Price">
      <p>Price:${data.price }</p>
    </div> 
    <div class="flex gap-2 col-span-1">
      <img class="w-6 h-6 " src="${"https://img.icons8.com/?size=50&id=7163&format=png"}" alt="Price">
      <p>vaccinated_status:${data.vaccinated_status}</p>
    </div> 
    </div>
    <div class="">
      <h2 class="text-xl font-bold py-5">Detail Information</h2>
      <p>${data.
        pet_details
        }</p>
    </div> 
  `
  Details.appendChild(div)
  document.getElementById('my_modal_1').showModal()
  
}


const sortButton=()=>{
  
  
}


loadButtons();
loadCards();
sortButton();
