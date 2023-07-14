import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
import '../index.css';

const BarGraph = () => {
    const chartRef = useRef(null);
    let chartInstance = useRef(null);
    const [data, setData] = React.useState([]);

    useEffect(() => {
        try {
            fetch('http://3.7.96.152:5000/mainvia')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setData(data.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        if (chartInstance.current) {
            // Update the existing chart instance
            chartInstance.current.data.labels = data.map((item) => item[0]);
            chartInstance.current.data.datasets[0].data = data.map((item) => item[1]);
            chartInstance.current.data.datasets[1].data = data.map((item) => item[2]);
            chartInstance.current.update();
        } else {
            // Create the chart instance
            Chart.register(CategoryScale, LinearScale, BarController, BarElement);
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map((item) => item[0]),
                    datasets: [
                        {
                            label: 'Via',
                            backgroundColor: 'rgba(75, 192, 192, 0.5)', // Customize the color as needed
                            data: data.map((item) => item[1]),
                        },
                        {
                            label: 'Main',
                            backgroundColor: 'rgba(128, 128, 128, 0.9)', // Customize the color as needed
                            data: data.map((item) => item[2]),
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            title: {
                                display: true,
                                text: 'Date',
                            },
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Booking',
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: true, // Display the legend
                        },
                    },
                },
            });
        }
    }, [data]);

    return (
        <div>
            <canvas className="canvasbargraph" ref={chartRef} />
        </div>
    );
};

export default BarGraph;
