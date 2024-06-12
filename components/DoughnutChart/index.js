'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';
import DataStatus from '@/components/DataStatus';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import { getTypeData } from '@/utils/getTypeData';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data }) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const chartRef = useRef(null);
  const [viewport, setViewport] = useState('desktop');
  const [doughnutData, setDoughnutData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const labels = data.map((item) => getTypeData('type', item.type)?.content);
    const prices = data.map((item) =>
      item.price < 0 ? -item.price : item.price
    );
    const colors = data.map((item) => {
      const data = getTypeData('type', item.type);
      return theme === 'light' ? data.color.light : data.color.dark;
    });
    const tempData = {
      labels: labels,
      datasets: [
        {
          label: '小計',
          data: prices,
          backgroundColor: colors,
          borderWidth: 0,
          cutout: '60%',
        },
      ],
    };
    setDoughnutData(tempData);
    setIsLoading(false);
  }, [data, theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setViewport('mobile');
      } else {
        setViewport('desktop');
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <DataStatus content="載入中..." type="loading" />
      ) : (
        <>
          <div className={styles.wrapper}>
            <Doughnut
              // ref={chartRef}
              data={doughnutData}
              options={{
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
                },
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
