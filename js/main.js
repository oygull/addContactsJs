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
    firstName: 'Nozigul',
    lastName: 'Ibrokhimova',
    telNum: '+998995643245',
    categoryItem: 'relative'
  },
   {
    firstName: 'Laylo',
    lastName: 'Kasimaliyeva',
    telNum: '+998995643245',
    categoryItem: 'friend'
  },
   {
    firstName: 'Jaloliddin',
    lastName: 'Boboyev',
    telNum: '+998995643245',
    categoryItem: 'relative'
  },
  {
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
     <div class="">
                <p class="first-name">${el.firstName}</p>
                <p class="last-name">${el.lastName}</p>
              </div>
              <div>
                <p class="category">${el.categoryItem}</p>
                <a href="telto:${el.telNum}" class="tel-num"><i class='bx bxs-phone-call'></i></a>
              </div>
   `
   li.classList="contact-item";
   firstList.appendChild(li);
 });
}



elSorting.addEventListener('click', sortingItems);

function sortingItems(e){


 if(e.target.value='friend'){
    firstList.innerHTML='';
    let removedArr = []
    contacts.forEach((el)=>{
     if(el.categoryItem=='friend'){
      removedArr.push(el)
     }
    })
    showItems(removedArr);
  }

}

