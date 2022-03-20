let contactForm = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let telNum = document.getElementById("telNum");
let firstList = document.getElementById('firstList');
let category = document.getElementById('category');
let relativesBtn = document.getElementById('profile-tab');
let secondList = document.getElementById('secondList');

let contacts = [
  {
    firstName: 'Nozigul',
    lastName: 'Ibrokhimova',
    telNum: '+998995643245',
    categoryItem: 'relatives'
  },
   {
    firstName: 'Laylo',
    lastName: 'Kasimaliyeva',
    telNum: '+998995643245',
    categoryItem: 'friends'
  },
   {
    firstName: 'Jaloliddin',
    lastName: 'Boboyev',
    telNum: '+998995643245',
    categoryItem: 'relatives'
  },
  {
    firstName: 'Khadichabegim',
    lastName: 'Rakhimova',
    telNum: '+998990012838',
    categoryItem: 'friends'
  }
] ;
showItems(contacts);

contactForm.addEventListener("submit", (e)=>{

  let newArr = []
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




 