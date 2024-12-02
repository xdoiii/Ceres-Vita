class ReportManager {
    constructor() {
        this.reports = [];
        this.init();
    }

    init() {
        this.fetchReports();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const generateButton = document.querySelector('.generate-report');
        if (generateButton) {
            generateButton.addEventListener('click', () => this.generateReport());
        }

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('download-report')) {
                const reportCard = e.target.closest('.report-card');
                const reportTitle = reportCard.querySelector('h3').textContent;
                this.downloadReport(reportTitle);
            }
        });
    }

    async fetchReports() {
        // Simulate API call
        this.reports = [
            {
                title: 'Annual Yield Report 2024',
                date: '2024-03-15',
                type: 'yield'
            },
            {
                title: 'Quarterly Soil Analysis',
                date: '2024-03-01',
                type: 'soil'
            },
            {
                title: 'Financial Summary Q1 2024',
                date: '2024-03-10',
                type: 'financial'
            }
        ];
        this.updateReportsList();
    }

    updateReportsList() {
        const reportsList = document.querySelector('.reports-list');
        if (!reportsList) return;

        reportsList.innerHTML = this.reports.map(report => `
            <div class="report-card">
                <div class="report-info">
                    <h3>${report.title}</h3>
                    <p>Generated: ${report.date}</p>
                </div>
                <button class="download-report">Download PDF</button>
            </div>
        `).join('');
    }

    generateReport() {
        const reportType = document.getElementById('reportType').value;
        const reportDate = document.getElementById('reportDate').value;

        if (!reportDate) {
            alert('Please select a date');
            return;
        }

        // Simulate report generation
        const newReport = {
            title: `${this.capitalizeFirst(reportType)} Report - ${reportDate}`,
            date: new Date().toISOString().split('T')[0],
            type: reportType
        };

        this.reports.unshift(newReport);
        this.updateReportsList();
        alert('Report generated successfully!');
    }

    downloadReport(reportTitle) {
        // Simulate PDF download
        alert(`Downloading ${reportTitle}...`);
        // In a real app, this would trigger a file download
    }

    capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Initialize Report Manager
document.addEventListener('DOMContentLoaded', () => {
    const reportManager = new ReportManager();
});