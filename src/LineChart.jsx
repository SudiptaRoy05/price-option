import { LineChart as LC, Line,XAxis,YAxis } from 'recharts';


export default function LineChart() {
  const studentMarks = [
    { name: "Alice", math: 85, english: 78, science: 92 },
    { name: "Bob", math: 78, english: 81, science: 85 },
    { name: "Charlie", math: 92, english: 89, science: 94 },
    { name: "David", math: 88, english: 84, science: 90 },
    { name: "Ella", math: 74, english: 76, science: 82 },
    { name: "Frank", math: 91, english: 87, science: 88 },
    { name: "Grace", math: 83, english: 79, science: 84 },
    { name: "Hannah", math: 76, english: 73, science: 80 },
    { name: "Ian", math: 89, english: 85, science: 92 },
    { name: "Jack", math: 94, english: 90, science: 96 }
];

      
  return (
    <div className='m-16'>
        <LC width={500} height={500} data={studentMarks}>
          <XAxis dataKey={'nmae'}></XAxis>
          <YAxis></YAxis>
            <Line dataKey='math' type={'monotone'} stroke='yellow'></Line>
            <Line dataKey='english' type={'monotone'} stroke='red'></Line>
            <Line dataKey='science' type={'monotone'} stroke='green'></Line>

        </LC>
    </div>
  )
}
