import arrowDown from '/src/assets/icons8-chart-arrow-descent-64.png'
import arrowUp from '/src/assets/icons8-chart-arrow-rise-64.png';
export default function Goal({count,yesterdayCount,packsCount}) {
    const totalCigarettes = count + packsCount * 20;
    const barWidth = Math.min((totalCigarettes / yesterdayCount) * 100, 100);
  return (
    <div className="h-48 w-full flex flex-col items-baseline justify-between border border-gray-200 p-4 rounded-lg shadow-md">
        <div className="w-full flex justify-between items-baseline-last">
            <div className='flex flex-col justify-baseline items-baseline gap-2'>
                <h2 className="text-2xl font-semibold">Daily Goal<br/> progress</h2>
                <p className="text-gray-400 text-sm">{yesterdayCount === 0?"No goal set for today." :`Target: ${yesterdayCount} cigarettes or less`}</p>
            </div>
            {
                yesterdayCount > 0 &&
                <img src={totalCigarettes <= yesterdayCount ? arrowDown : arrowUp} alt="arrow icon" className='w-6 h-6' /> 
            }
        </div>
        {
            yesterdayCount === 0 ?
            <p className='text-gray-400 text-sm italic'>Start tracking to set a goal for tomorrow!</p>:
            <div className='w-full flex flex-col justify-start items-baseline gap-2'>
                <div className='w-full h-4 bg-blue-200 rounded-2xl'>
                    <div style={{
                        width: `${barWidth}%`,
                        height: '100%',
                        backgroundColor: totalCigarettes > yesterdayCount ? '#f87171' : '#4ade80',
                        borderRadius: '0.5rem'
                    }}/>
                </div>
                <div className='w-full px-2 flex justify-between items-center'>
                    <p>{totalCigarettes}/{yesterdayCount} cigarettes</p>
                    {
                        yesterdayCount - totalCigarettes >= 0 ?
                            <p className='text-green-400  font-semibold'>{yesterdayCount - totalCigarettes} remaining</p>:
                            <p className='text-red-400 font-semibold'>{totalCigarettes - yesterdayCount} over</p>
                    }
                </div>
            </div>
        }
    </div>
  )
}