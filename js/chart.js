const ctxWeekly = document.getElementById('chartOrdersWeekly').getContext('2d');
const chart = new Chart(ctxWeekly, {
    type: 'bar', // Hoặc 'line', 'pie',...
    data: {
        labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        datasets: [{
            label: 'Số đơn đặt bàn',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(255, 205, 86, 0.7)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'black' // Nếu muốn chữ trong legend cũng màu vàng
                }
            }
        },
        scales: {
            x: {
                ticks: { color: 'black' }
            },
            y: {
                ticks: { color: 'black' }
            }
        }
    }
});

const ctxAccess = document.getElementById('charAccessSite').getContext('2d');

new Chart(ctxAccess, {
    type: 'line', // hoặc 'bar', 'pie' tùy ý
    data: {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        datasets: [{
            label: 'Số lượt truy cập',
            data: [120, 150, 100, 180, 130, 170, 200],
            fill: true,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'black'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'black'
                }
            },
            y: {
                ticks: {
                    color: 'black'
                }
            }
        }
    }
});

const ctxDaily = document.getElementById('chartOrdersDaily').getContext('2d');
new Chart(ctxDaily, {
  type: 'doughnut', // hoặc 'pie'
  data: {
    labels: ['Sáng (7h-11h)', 'Trưa (11h-14h)', 'Chiều (14h-17h)', 'Tối (17h-21h)'],
    datasets: [{
      label: 'Đặt bàn theo khung giờ',
      data: [25, 40, 15, 30], // Số lượng ví dụ
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'black'
        }
      }
    }
  }
});

// Chart: Tổng đặt bàn trong tháng (ví dụ theo tuần)
const ctxMonthly = document.getElementById('chartOrdersMonthly').getContext('2d');
new Chart(ctxMonthly, {
    type: 'bar',
    data: {
        labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
        datasets: [{
            label: 'Đơn đặt bàn',
            data: [10, 14, 16, 14],
            backgroundColor: 'rgba(255, 159, 64, 0.7)'
        }]
    },
    options: {
        responsive: true
    }
});