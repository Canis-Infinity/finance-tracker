'use client';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import DataStatus from '@/components/DataStatus';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import { getTypeData } from '@/utils/getTypeData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data, activeTab, theme }) => {
  return (
    <>
      <div className={styles.wrapper} style={activeTab !== 'month' ? {minHeight: '400px'} : {}} data-desktop>
        <Bar
          data={data}
          options={{
            indexAxis: 'y',
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  size: 14,
                  color: theme === 'light' ? '#1f1f1f' : '#bfbfbf',
                  padding: 20,
                  boxHeight: 20,
                },
              },
              barThickness: 20,
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          }}
          redraw={true}
        />
      </div>
      <div className={styles.wrapper} style={activeTab !== 'month' ? {minHeight: '400px'} : {}} data-mobile>
        <Bar
          data={data}
          options={{
            indexAxis: 'y',
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  size: 14,
                  color: theme === 'light' ? '#1f1f1f' : '#bfbfbf',
                  padding: 20,
                  boxHeight: 20,
                },
              },
              barThickness: 20,
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          }}
          redraw={true}
        />
      </div>
    </>
  );
};

export default function LineChart({ chartData, activeTab }) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [lineChartData, setLineChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const tempData = chartData;
    setLineChartData(tempData);
    setIsLoading(false);
  }, [chartData, theme]);

  return (
    <>
      {isLoading ? null : Object.keys(lineChartData).length === 0 ? null : (
        <>
          <Chart data={lineChartData} activeTab={activeTab} theme={theme} />
        </>
      )}
    </>
  );
}
