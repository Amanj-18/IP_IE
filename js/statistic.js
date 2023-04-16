const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Reckless driving', 'drunk driving', 'Belt violation', 'speeding', 'Signal Violation', 'fake documents'],
        datasets: [{
            label: '% of Adults',
            data: [91,50,20,60,30,40],
            borderColor: '#FF6384',
            backgroundColor: '#FFB1C1',
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx1, {
    type: 'radar',
    data: {
        labels: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            '2022',
            '2023'
        ],
        datasets: [{
            label: 'Male',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Female',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});

new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: [
            'Once a week',
            'Regular',
            'once a month',
            'twice a day',
            'thrice a day'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 23, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {}
});

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April'
        ],
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [50 , 60 , 91, 41],
            borderColor: 'rgb(255, 99, 132)',
            order: 2,
            backgroundColor: 'rgba(115, 9, 32, 0.6)'
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: [90, 90, 90, 90],
            order: 1,
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
        // type: 'scatter',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

