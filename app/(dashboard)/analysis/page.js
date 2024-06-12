import DoughnutChart from '@/components/DoughnutChart';

export default function Analysis() {
  const doughnutData = [
    {
      type: 'food',
      amount: 63,
      price: -9600,
    },
    {
      type: 'salary',
      amount: 1,
      price: 28600,
    },
    {
      type: 'traffic',
      amount: 3,
      price: -320,
    },
    {
      type: 'rent',
      amount: 22,
      price: -6500,
    },
    {
      type: 'medical',
      amount: 1,
      price: -300,
    },
    {
      type: 'other',
      amount: 1,
      price: 510,
    },
  ];

  return (
    <>
      <hgroup>
        <h1>收支分析</h1>
      </hgroup>
      <DoughnutChart data={doughnutData} />
    </>
  );
}