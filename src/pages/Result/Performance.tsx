import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const PerformancePage = () => {
    // Data for the "Speaking Time Distribution" Pie Chart
    const speakingTimeDistributionData = {
        labels: ['Privacy Concerns', 'Data Breaches', 'Algorithmic Bias', 'Ethical Frameworks'],
        datasets: [{
            data: [40, 30, 20, 10], // Example data percentages
            backgroundColor: ['#00B5E2', '#F56F64', '#FFB94D', '#73D1B1'], // Different colors for each section
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    };

    // Data for the "Speaking Pace Variation" Line Chart
    const speakingPaceVariationData = {
        labels: ['0:00', '5:00', '10:00', '15:00', '20:00', '25:00', '30:00'], // Time labels
        datasets: [{
            label: 'Speaking Pace (WPM)',
            data: [130, 135, 145, 155, 160, 150, 140], // Example WPM data
            fill: true,
            backgroundColor: 'rgba(0, 174, 239, 0.1)', // Light fill color
            borderColor: '#00AEEF', // Line color
            tension: 0.4
        }]
    };

    // Data for the "Clarity Trend" Line Chart
    const clarityTrendData = {
        labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Current'],
        datasets: [{
            label: 'Clarity Score (%)',
            data: [65, 70, 75, 80, 85], // Example clarity score
            fill: false,
            backgroundColor: '#4CAF50', // Line color
            borderColor: '#4CAF50', // Line color
            borderWidth: 2
        }]
    };

    // Data for the "Key Metrics" Bar Chart
    const keyMetricsData = {
        labels: ['Filler Words', 'Vocabulary Richness', 'Argument Structure', 'Evidence Usage'],
        datasets: [{
            label: 'Metrics',
            data: [3, 72, 65, 50], // Example data for each metric
            backgroundColor: ['#66BB6A', '#AB47BC', '#FF7043', '#FFEB3B'],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Speaking Time Distribution */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Speaking Time Distribution</h3>
                    <div className='lg:w-4/5 mx-auto'>
                        < Doughnut data={speakingTimeDistributionData}  />
                    </div>

                </div>

                {/* Speaking Pace Variation */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Speaking Pace Variation</h3>
                    <Line data={speakingPaceVariationData} />
                </div>

                {/* Clarity Trend */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Clarity Trend</h3>
                    <Line data={clarityTrendData} />
                </div>

                {/* Key Metrics */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                    <Bar data={keyMetricsData} />
                </div>
            </div>
        </div>
    );
};

export default PerformancePage;
