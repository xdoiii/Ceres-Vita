class Dashboard {
    constructor() {
        this.stats = {
            cropYield: 0,
            activeFields: 0,
            weather: '',
            soilHealth: ''
        };
        this.init();
    }

    init() {
        this.fetchDashboardData();
        this.setupRefreshInterval();
    }

    setupRefreshInterval() {
        // Refresh dashboard data every 5 minutes
        setInterval(() => this.fetchDashboardData(), 5 * 60 * 1000);
    }

    async fetchDashboardData() {
        try {
            // Simulate API call with setTimeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mock data - in a real application, this would come from an API
            this.stats = {
                cropYield: Math.floor(Math.random() * 5000) + 1000,
                activeFields: Math.floor(Math.random() * 100) + 20,
                weather: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)],
                soilHealth: ['Excellent', 'Good', 'Fair'][Math.floor(Math.random() * 3)]
            };
            
            this.updateDashboard();
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            this.handleError();
        }
    }

    updateDashboard() {
        document.querySelector('[data-stat="cropYield"]').textContent = `${this.stats.cropYield} tons`;
        document.querySelector('[data-stat="activeFields"]').textContent = `${this.stats.activeFields} fields`;
        document.querySelector('[data-stat="weather"]').textContent = this.stats.weather;
        document.querySelector('[data-stat="soilHealth"]').textContent = this.stats.soilHealth;
    }

    handleError() {
        const stats = document.querySelectorAll('[data-stat]');
        stats.forEach(stat => {
            stat.textContent = 'Error loading data';
            stat.style.color = 'red';
        });
    }
}

// Initialize dashboard
const dashboard = new Dashboard();