let month =[
    {
        MName:"J",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"f",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"m",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"a",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"may",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"Juni",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"July",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"a",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"s",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"o",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"n",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    },
    {
        MName:"d",
        Entertainment:55,
        Food:49,
        Health:44,
        Transportation:24,
        Other:15

    }, 
]
let totEntertainment=0;
let totFood=0;
let totHealth=0;
let totTransportation=0;
let totOther=0;

month.forEach(element => {
    totEntertainment+=(element.Entertainment)
    totFood+=(element.Food)
    totHealth+=(element.Health)
    totTransportation+=(element.Transportation)
    totOther+=(element.Other)
});

let ptotEntertainment=(totEntertainment/12);
let ptotFood=(totFood/12);;
let ptotHealth=(totHealth/12);;
let ptotTransportation=(totTransportation/12);;
let ptotOther=(totOther/12);;

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
          text: "Budget Tracker"
        }
      }
    });


