let contactForm = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let telNum = document.getElementById("telNum");
let firstList = document.getElementById('firstList');
let category = document.getElementById('category');
let elSorting = document.getElementById('sorting')
let newArr = [];
let contacts = [
  {
    id:1,
    firstName: 'Nozigul',
    lastName: 'Ibrokhimova',
    telNum: '+998995643245',
    categoryItem: 'relative'
  },
   {
    id:2,
    firstName: 'Laylo',
    lastName: 'Kasimaliyeva',
    telNum: '+998995643245',
    categoryItem: 'friend'
  },
   {
    id:3,
    firstName: 'Jaloliddin',
    lastName: 'Boboyev',
    telNum: '+998995643245',
    categoryItem: 'relative'
  },
  {
    id:4,
    firstName: 'Khadichabegim',
    lastName: 'Rakhimova',
    telNum: '+998990012838',
    categoryItem: 'friend'
  }
] ;
showItems(contacts);

contactForm.addEventListener("submit", (e)=>{

  e.preventDefault();
  let person =
    {
      firstName: firstName.value,
      lastName: lastName.value,
      telNum: telNum.value,
      categoryItem: category.value
    }
    newArr.push(person) ;

    lastName.value="";
    firstName.value ="";
    telNum.value="";

    showItems(newArr);
})

function showItems(e){
 e.forEach(el => {
   let li = document.createElement('li');
   li.innerHTML = `
     <div >
                <p class="first-name">${el.firstName}</p>
                <p class="last-name">${el.lastName}</p>
              </div>
              <div>
                <p class="category">${el.categoryItem}</p>
                <a href="telto:${el.telNum}" class="tel-num"><i class='bx bxs-phone-call'></i></a>
                <button onclick="removeItem(${el.id})" class="delete-btn"><i class='bx bxs-x-circle'></i></button>
              </div>
   `
   
  li.classList = `contact-item`
   firstList.appendChild(li);
 });
}



elSorting.addEventListener('click', sortingItems);
let newArr2 = contacts.concat(newArr);

function sortingItems(e){
  firstList.innerHTML='';


  switch(e.target.value){
    case "all": 
      showItems(newArr2);
    break;
    case "relatives": 
    let a = newArr2.filter((el)=>{ 
     if(el.categoryItem=='relative') return true; 
      })
      showItems(a);
     break;
     case "friends": 
     let b = newArr2.filter((el)=>{ 
      if(el.categoryItem=='friend') return true; 
       })
       showItems(b);
      break;
  }
}

function removeItem(e){
  let removedArr=[];
  if(confirm("Dou you want to delete?") == true){
    firstList.innerHTML='';
    newArr2.forEach((el)=>{
      if(el.id!==e){
          removedArr.push(el)
      }
    })
  }
  newArr2=removedArr
  showItems(newArr2);
}
