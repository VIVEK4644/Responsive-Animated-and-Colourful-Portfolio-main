const account1 = {
    owner: 'Roshan Kumar',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };


  
const account2 = {
  owner: 'Deepak yadav',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Shubham Kumar',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Deegvijay Patil',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
  
  let movmentsdetailsdata = document.querySelector('.movements');

  let accountDetails=[account1,account2,account3,account4];
  
  movmentsdetailsdata.innerHTML = "";
  
  function displaydataarray(movment) {
    movment.forEach((mov, i) => {
      const type = mov > 0 ? 'deposit' : 'withdrawal'
      let html = `
        <div class="movements__row"> 
          <div class="movements__type movements__type--${type}">${i+ 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
      `;
      movmentsdetailsdata.innerHTML += html;
    });
  }
  
 
  console.log(movmentsdetailsdata.innerHTML);

// user name
function userdetails(acc){
  acc.forEach((name)=>{
    name.username = name.owner.toLowerCase().split(" ").map((user)=>{
     return user[0];
    }).join("");
  })
  console.log(acc);
}
userdetails(accountDetails);


// total
let balance41=document.querySelector(".balance__value"); 

// function totalbalance(balance){
//   let total=balance.reduce((acc,curr)=>{
//      return acc+curr
//   },0)
//   console.log(total);
//   balance41.textContent=`${total}.00`;
// }
function totalbalance(acc) {
   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  
  balance41.textContent = `${acc.balance}.00`;
}

//  depostie
let depositdata=document.querySelector(".summary__value--in")
function deposit(movements){
  let postive=movements.filter((mov)=>{
    return mov>0
    
  })
  console.log(postive);
  let depototal=postive.reduce((acc,cur)=>{
    return acc+cur;
  },0)
  depositdata.textContent=`${depototal}.00`;
  
}




// withdrawal

let withdrawal=document.querySelector(".summary__value--out");

function withdrawal1(movements){
  let nagetiv=movements.filter((mov)=>{
    return mov<0;
  })
  let negtitotal=nagetiv.reduce((acc,cuu)=>{
    return acc+cuu;
  })
  console.log(Math.abs(negtitotal));
  withdrawal.textContent=`${Math.abs(negtitotal)}.00`
}




// interest 
let interestElement = document.querySelector(".summary__value--interest");
function calculateInterest(movements, interestRate) {
  let positiveMovements = movements.filter((movement) => {
    console.log(movement > 0);
    return movement > 0;
  });
  console.log(positiveMovements);
  let interestAmounts = positiveMovements.map((movement) => {
    console.log(movement * interestRate / 100);
    return movement * interestRate / 100;
  });
  let totalInterest = interestAmounts.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(totalInterest.toFixed(1));
  interestElement.textContent = `${totalInterest.toFixed(1)}`;
}




console.log(accountDetails);

function updateui() {
  displaydataarray(currentAccount.movements);
  totalbalance(currentAccount);
  deposit(currentAccount.movements);
  withdrawal1(currentAccount.movements);
  calculateInterest(currentAccount.movements, currentAccount.interestRate);
}

let currentAccount; // login user

let btnLogin = document.querySelector(".login__btn");
let inputLoginUsername = document.querySelector(".login__input--user");
let inputLoginPin = document.querySelector(".login__input--pin");
let container = document.querySelector(".app");
let welcomeMass = document.querySelector(".welcome");

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  currentAccount = accountDetails.find((acc) => {
    return acc.username === inputLoginUsername.value;
  });
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    welcomeMass.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    inputLoginUsername.value="";
    inputLoginPin.value="";
    container.style.opacity=100;
     updateui(currentAccount);
    WatchStart();
    datedata1();
    console.log(currentAccount);

    
  } else {  
    console.log('Incorrect username or pin');
  }
});


let hr=0;
let min=0;
let sec=0;

let secs=document.querySelector('.sec');
let mins=document.querySelector('.min');
let hrs=document.querySelector('.timer');
let timeId=null;
 function startWatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
   secs.innerHTML=(sec+0<10?"0":"")+sec; 
   mins.innerHTML=(min+0<10?"0":"")+min;
   hrs.innerHTML=(hr+0<10?"0":"")+hr;
   
}
function WatchStart(){
 timeId=setInterval(startWatch,1000);
}

// date
let datedata=document.querySelector(".date");

function datedata1(){
  let newdate = new Date();
 datedata.textContent=newdate.toLocaleDateString();
}

// transfer
let tranferbutton=document.querySelector(".form__btn--transfer");
let tranferName=document.querySelector(".form__input--to");
let transferAmount=document.querySelector(".form__input--amount");
tranferbutton.addEventListener('click', (e) => {
  e.preventDefault();
  let transferAmount1 = Number(transferAmount.value);
  let receiverAcc = accountDetails.find((acc) => {
    return acc.username === tranferName.value;
  });
  if (transferAmount1 > 0 && currentAccount.balance >= transferAmount1) {
    currentAccount.movements.push(-transferAmount1);
    receiverAcc.movements.push(transferAmount1);
    currentAccount.balance -= transferAmount1;
    receiverAcc.balance += transferAmount1;
    movmentsdetailsdata.innerHTML = "";
    tranferName.value="";
    transferAmount.value="";
    updateui();
  } else {
    console.log("faild");
  }
});