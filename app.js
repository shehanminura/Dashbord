let month =[
    {
        Entertainment:5000,
        Food:4009,
        Health:433,
        Transportation:500,
        Other:1500,
        income:15000,
        saveing:7500

    },
    {
        Entertainment:505,
        Food:400,
        Health:9004,
        Transportation:440,
        Other:150,
        income:20000,
        saveing:5300

    },
    {
        Entertainment:505,
        Food:409,
        Health:404,
        Transportation:240,
        Other:150,
        income:35000,
        saveing:5000

    },
    {
        Entertainment:600,
        Food:495,
        Health:2000,
        Transportation:2004,
        Other:9504,
        income:36000,
        saveing:1500

    },
    {
        Entertainment:550,
        Food:4090,
        Health:5500,
        Transportation:2400,
        Other:1500,
        income:44000,
        saveing:20000

    },
    {
        Entertainment:550,
        Food:490,
        Health:4400,
        Transportation:240,
        Other:10500,
        income:19000,
        saveing:6500

    },
    {
        Entertainment:850,
        Food:409,
        Health:4400,
        Transportation:2400,
        Other:15000,
        income:77000,
        saveing:56000

    },
    {
        Entertainment:5500,
        Food:490,
        Health:440,
        Transportation:2400,
        Other:1500,
        income:15000,
        saveing:9000

    },
    {
        Entertainment:5500,
        Food:4900,
        Health:4400,
        Transportation:24000,
        Other:15000,
        income:88000,
        saveing:50000

    },
    {
        Entertainment:5700,
        Food:4700,
        Health:440,
        Transportation:2004,
        Other:1500,
        income:19000,
        saveing:60000

    },
    {
        Entertainment:800,
        Food:4900,
        Health:4040,
        Transportation:24000,
        Other:15000,
        income:39000,
        saveing:10000

    },
    {
        Entertainment:505,
        Food:490,
        Health:4400,
        Transportation:2400,
        Other:1500,
        income:80000,
        saveing:30000

    }, 
]
let totEntertainment=0;
let totFood=0;
let totHealth=0;
let totTransportation=0;
let totOther=0;
let totincome=0;
let totsaveing=0;
let mtotbudget=0;

month.forEach(element => {
    totEntertainment+=(element.Entertainment)
    totFood+=(element.Food)
    totHealth+=(element.Health)
    totTransportation+=(element.Transportation)
    totOther+=(element.Other)
    totincome+=(element.income)
    totsaveing+=(element.saveing)


});
let ytotbudget=totEntertainment+totFood+totHealth+totTransportation+totOther;
let ptotEntertainment=(totEntertainment/12);
let ptotFood=(totFood/12);
let ptotHealth=(totHealth/12);
let ptotTransportation=(totTransportation/12);
let ptotOther=(totOther/12);

    document.getElementById("incomebox").innerHTML=`
                      <h4  style="margin: 10%;">YEAR INCOME- ${totincome}</h4>
                      <h4  style="margin: 10%;">Try to Saveing- ${totsaveing}</h4>
    `

    const xValues = ["Entertainment", "Food", "Health", "Transportation", "Other"];
    const yValues = [ptotEntertainment, ptotFood, ptotHealth, ptotTransportation, ptotOther];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Year Budget Tracker"
        }
      }
    });

let incomeMonthly=[month.length];
let beugetMonthly=[month.length];
let saveingMonthly=[month.length];
let i=0;

month.forEach(element => {
    incomeMonthly[i]=element.income;
    beugetMonthly[i]=(element.Entertainment)+(element.Food)+(element.Health)+(element.Transportation)+(element.Other);
    saveingMonthly[i]=element.saveing;
    i++;

});
console.log(incomeMonthly);
console.log(beugetMonthly);
console.log(saveingMonthly);


const bxValues = [100,200,300,400,500,600,700,800,900,1000,1100,1200];
const allMonth=["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"]

new Chart("bmyChart", {
  type: "line",
  data: {
    labels: allMonth,
    datasets: [{ 
      data: [beugetMonthly[0],beugetMonthly[1],beugetMonthly[2],beugetMonthly[3],beugetMonthly[4],beugetMonthly[5],beugetMonthly[6],beugetMonthly[7],beugetMonthly[8],beugetMonthly[9],beugetMonthly[10],beugetMonthly[11]],
      borderColor: "red",
      fill: false
    }, { 
      data: [saveingMonthly[0],saveingMonthly[1],saveingMonthly[2],saveingMonthly[3],saveingMonthly[4],saveingMonthly[5],saveingMonthly[6],saveingMonthly[7],saveingMonthly[8],saveingMonthly[9],saveingMonthly[10],saveingMonthly[11]],
      borderColor: "green",
      fill: false
    }, { 
      data: [incomeMonthly[0],incomeMonthly[1],incomeMonthly[2],incomeMonthly[3],incomeMonthly[4],incomeMonthly[5],incomeMonthly[6],incomeMonthly[7],incomeMonthly[8],incomeMonthly[9],incomeMonthly[10],incomeMonthly[11]],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});




const txValues = ["Income", "Saveing"];
const tyValues = [totincome, totsaveing, 0];
const tbarColors = ["red", "green"];

new Chart("tmyChart", {
  type: "bar",
  data: {
    labels: txValues,
    datasets: [{
      backgroundColor: barColors,
      data: tyValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Year Savings Goals "
    }
  }
});



///// newRecent transactions list




function addFrom() {
    let fEntertainment = Number(document.getElementById("Entertainmentform").value);
    let fFood = Number(document.getElementById("Foodform").value);
    let fHealth = Number(document.getElementById("Healthform").value);
    let fTransportation = Number(document.getElementById("Transportationform").value);
    let fOther = Number(document.getElementById("Otherform").value);
    let fincome = Number(document.getElementById("incomeform").value);
    let fsaveing = Number(document.getElementById("saveingform").value);

    month.push({
        Entertainment: fEntertainment,
        Food: fFood,
        Health: fHealth,
        Transportation: fTransportation,
        Other: fOther,
        income: fincome,
        saving: fsaveing
    });
}

console.log(month);









///// Recent transactions list

document.getElementById("btnAddTask").addEventListener("click", addTask);
let taskList=[];


function addTask() {
    let txtTask = document.getElementById("txtTask").value;
    let txtamount = document.getElementById("txtamount").value;
    if(txtTask.length!=0){
    taskList.push(`<li class="list-group-item">
                       <label class="form-check-label stretched-link">${txtTask} - ${txtamount}</label>
                     </li>`);

    loadTasks();
    clearTxt();
    }
}
function loadTasks(){
    let listBody="";
    
    taskList.forEach(task=>{
        listBody+=task;
    });
    document.getElementById("uList").innerHTML=listBody;
}

function clearTxt(){
    document.getElementById("txtTask").value = '';
    document.getElementById("txtamount").value='';
}

