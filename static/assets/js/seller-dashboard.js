document.addEventListener('DOMContentLoaded', function() {
    // Sample data (replace with actual data or fetch from server)
    const pendingCount = 5;
    const processingCount = 10;
    const completedCount = 20;

    // Get canvas context
    const ctx = document.getElementById('orders-chart').getContext('2d');

    // Chart configuration
    const ordersChart = new Chart(ctx, {
        type: 'pie', // Change chart type to pie
        data: {
            labels: ['Pending', 'Processing', 'Completed'],
            datasets: [{
                label: 'Orders Status',
                data: [pendingCount, processingCount, completedCount],
                backgroundColor: [
                    '#ff9800', // Pending color (rgba(255, 152, 0, 0.2) converted to hex)
                    '#2196f3', // Processing color (rgba(33, 150, 243, 0.2) converted to hex)
                    '#4caf50'  // Completed color (rgba(76, 175, 80, 0.2) converted to hex)
                ],
                borderColor: [
                    '#ff9800', // Pending color
                    '#2196f3', // Processing color
                    '#4caf50'  // Completed color
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top', // Adjust legend position
                    labels: {
                        boxWidth: 10, // Width of colored squares
                        boxHeight: 10, // Height of colored squares
                        usePointStyle: true // Use circles instead of squares
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2); // Format tooltip label
                        }
                    }
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('monthlySalesChart').getContext('2d');

    // Sample data for June (sales and orders)
    const salesData = [1500, 1800, 2200, 2000]; // Example sales data for each period in June
    const ordersData = [20, 25, 30, 28]; // Example orders data for each period in June
    const periods = ['June 1-2', 'June 3-4', 'June 5-6', 'June 7-8']; // Period labels

    // Create the chart
    const monthlySalesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: periods,
            datasets: [{
                label: 'Total Sales',
                data: salesData,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                fill: true,
                pointStyle: 'circle', // Customize point style
                pointBackgroundColor: 'blue', // Point color
            }, {
                label: 'Total Orders',
                data: ordersData,
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                fill: true,
                pointStyle: 'rect', // Customize point style
                pointBackgroundColor: 'green', // Point color
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month of June'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true, // Use custom point styles
                    }
                }
            }
        }
    });
});

// Function to populate recent orders list
// Example data for recent orders (replace with actual data or fetch from backend)
const recentOrders = [
    { orderId: '001', orderName: 'Product A', customerName: 'John Doe', transactionStatus: 'Pending', date: '2024-07-03' },
    { orderId: '002', orderName: 'Product B', customerName: 'Jane Smith', transactionStatus: 'Pending', date: '2024-07-02' },
    { orderId: '002', orderName: 'Product B', customerName: 'Jane Smith', transactionStatus: 'Processing', date: '2024-07-02' },
    { orderId: '002', orderName: 'Product B', customerName: 'Jane Smith', transactionStatus: 'Completed', date: '2024-07-02' },
    { orderId: '002', orderName: 'Product B', customerName: 'Jane Smith', transactionStatus: 'Completed', date: '2024-07-02' },

    
    
    
    // Add more orders as needed
];

// Function to populate recent orders list
function populateRecentOrders() {
    console.log("Populating recent orders...");
    const recentOrdersList = document.getElementById('recent-orders-list');
    recentOrdersList.innerHTML = ''; // Clear existing list
    
    recentOrders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="order-id">${order.orderId}</span>
            <span class="order-name">${order.orderName}</span>
            <span class="customer-name">${order.customerName}</span>
            <span class="transaction-status ${order.transactionStatus.toLowerCase()}">${order.transactionStatus}</span>
            <span class="order-date">${order.date}</span>
        `;
        listItem.classList.add('order-item'); // Optional: add a class for additional styling
        
        // Add specific styling based on transaction status
        switch (order.transactionStatus.toLowerCase()) {
            case 'pending':
                listItem.querySelector('.transaction-status').classList.add('pending');
                break;
            case 'processing':
                listItem.querySelector('.transaction-status').classList.add('processing');
                break;
            case 'completed':
                listItem.querySelector('.transaction-status').classList.add('completed');
                break;
            default:
                break;
        }
        
        recentOrdersList.appendChild(listItem);
    });
}


// Ensure the DOM is fully loaded before populating orders
document.addEventListener("DOMContentLoaded", function(event) {
    populateRecentOrders();
});

