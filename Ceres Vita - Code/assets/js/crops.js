class CropManager {
    constructor() {
        this.crops = [];
        this.init();
    }

    init() {
        this.fetchCrops();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const viewButtons = document.querySelectorAll('.view-details');
        viewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const cropCard = e.target.closest('.crop-card');
                const cropName = cropCard.querySelector('h3').textContent;
                this.showCropDetails(cropName);
            });
        });
    }

    async fetchCrops() {
        // Simulate API call
        this.crops = [
            {
                name: 'Wheat',
                status: 'Growing',
                growthStage: '45%',
                expectedHarvest: 'Oct 2024',
                soilMoisture: '65%',
                lastWatered: '2024-03-15',
                fertilizer: 'Applied'
            },
            {
                name: 'Corn',
                status: 'Planted',
                growthStage: '15%',
                expectedHarvest: 'Nov 2024',
                soilMoisture: '70%',
                lastWatered: '2024-03-16',
                fertilizer: 'Pending'
            }
        ];
        this.updateCropDisplay();
    }

    updateCropDisplay() {
        const cropGrid = document.querySelector('.crops-grid');
        if (!cropGrid) return;

        cropGrid.innerHTML = this.crops.map(crop => `
            <div class="crop-card">
                <img src="../assets/images/${crop.name.toLowerCase()}.jpg" alt="${crop.name}">
                <h3>${crop.name}</h3>
                <div class="crop-details">
                    <p>Status: ${crop.status}</p>
                    <p>Growth Stage: ${crop.growthStage}</p>
                    <p>Expected Harvest: ${crop.expectedHarvest}</p>
                </div>
                <button class="view-details">View Details</button>
            </div>
        `).join('');

        this.setupEventListeners();
    }

    showCropDetails(cropName) {
        const crop = this.crops.find(c => c.name === cropName);
        if (!crop) return;

        const detailsHTML = `
            <div class="crop-details-modal">
                <h2>${crop.name} Details</h2>
                <p>Status: ${crop.status}</p>
                <p>Growth Stage: ${crop.growthStage}</p>
                <p>Expected Harvest: ${crop.expectedHarvest}</p>
                <p>Soil Moisture: ${crop.soilMoisture}</p>
                <p>Last Watered: ${crop.lastWatered}</p>
                <p>Fertilizer Status: ${crop.fertilizer}</p>
            </div>
        `;

        alert(detailsHTML); // In a real app, use a proper modal
    }
}

// Initialize Crop Manager
document.addEventListener('DOMContentLoaded', () => {
    const cropManager = new CropManager();
});