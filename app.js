let month =[
    {
        MName:"J",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"f",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"m",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"a",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"may",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"Juni",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"July",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"a",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"s",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"o",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"n",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

    },
    {
        MName:"d",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15,
        income:150000,
        saveing:75000

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




const txValues = ["Italy", "France"];
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



