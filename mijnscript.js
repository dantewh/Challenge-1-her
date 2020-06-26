var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [{
            label: 'Liter per uur',
            data: [22, 19, 15, 12, 9, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var doughnut = document.getElementById('myDoughnutChart');
var myDoughnutChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
    datasets: [{
        data: [80, 20,],
        backgroundColor: [
                'rgba(54, 162, 235, 0.2)', 
        ],
        borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
        ],
            borderWidth: 1
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
        'Water in procenten'
    ]
}})

var line = document.getElementById('myLineChart')
var myLineChart = new Chart(line, {
    type: 'line',
    data: {
        labels: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        datasets: [
            {
                label: "X 100KM",
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                 borderWidth: 1,
               
                data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 32, 35]
            },
            
            
           
        ]
    
}});
