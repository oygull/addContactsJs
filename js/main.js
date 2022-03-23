let contactForm = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let telNum = document.getElementById("telNum");
let firstList = document.getElementById('firstList');
let chooseType = document.getElementById('chooseType');
let elBtnGroup = document.querySelector('.btn-group')

let newArr = [];
let contacts = [
  {
    id:1,
    firstName: 'Nozigul',
    lastName: 'Ibrokhimova',
    telNum: '+998995643245',
    categoryItem: 'Relatives'
  },
   {
    id:2,
    firstName: 'Laylo',
    lastName: 'Kasimaliyeva',
    telNum: '+998995643245',
    categoryItem: 'Friends'
  },
   {
    id:3,
    firstName: 'Jaloliddin',
    lastName: 'Boboyev',
    telNum: '+998995643245',
    categoryItem: 'Relatives'
  },
  {
    id:4,
    firstName: 'Khadichabegim',
    lastName: 'Rakhimova',
    telNum: '+998990012838',
    categoryItem: 'Friends'
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
      categoryItem: chooseType.value
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

let newArr2 = contacts.concat(newArr);

elBtnGroup.addEventListener('click', (e)=>{
  console.log(e.target.textContent);
   let newTypeArr = newArr2.filter((item)=>{
     return item.categoryItem ==e.target.textContent
   })
    if(e.target.textContent=='All'){
      newTypeArr = newArr2;
    }
    let newTypeArrOne = newTypeArr.map((item)=>{
      return `
      <li class="contact-item">
      <div >
      <p class="first-name">${item.firstName}</p>
      <p class="last-name">${item.lastName}</p>
    </div>
    <div>
      <p class="category">${item.categoryItem}</p>
      <a href="telto:${item.telNum}" class="tel-num"><i class='bx bxs-phone-call'></i></a>
      <button onclick="removeItem(${item.id})" class="delete-btn"><i class='bx bxs-x-circle'></i></button>
    </div>
      </li>
      `
    })
    firstList.innerHTML = newTypeArrOne.join('');
})


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
