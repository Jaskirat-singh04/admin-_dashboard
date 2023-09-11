// analytics.js

// This is a placeholder for the actual data. In a real application, this data would come from the server.
const analyticsData = {
    sales: 1000,
    revenue: 5000,
    trafficSources: {
        direct: 300,
        organicSearch: 200,
        paidSearch: 100,
        social: 400
    },
    userActivity: {
        activeUsers: 100,
        newUsers: 50,
        returningUsers: 50
    }
};

// Function to display the analytics data on the page
function displayAnalyticsData() {
    const container = document.querySelector('.container');

    const salesElement = document.createElement('p');
    salesElement.textContent = `Sales: ${analyticsData.sales}`;
    container.appendChild(salesElement);

    const revenueElement = document.createElement('p');
    revenueElement.textContent = `Revenue: ${analyticsData.revenue}`;
    container.appendChild(revenueElement);

    const trafficSourcesElement = document.createElement('p');
    trafficSourcesElement.textContent = `Traffic Sources: Direct (${analyticsData.trafficSources.direct}), Organic Search (${analyticsData.trafficSources.organicSearch}), Paid Search (${analyticsData.trafficSources.paidSearch}), Social (${analyticsData.trafficSources.social})`;
    container.appendChild(trafficSourcesElement);

    const userActivityElement = document.createElement('p');
    userActivityElement.textContent = `User Activity: Active Users (${analyticsData.userActivity.activeUsers}), New Users (${analyticsData.userActivity.newUsers}), Returning Users (${analyticsData.userActivity.returningUsers})`;
    container.appendChild(userActivityElement);
}

// Call the function to display the analytics data when the page loads
window.onload = displayAnalyticsData;
