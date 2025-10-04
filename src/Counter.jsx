import cigarette from "/src/assets/icons8-smoking-32.png";
import packs from "/src/assets/icons8-cigarettes-pack-64.png";
export default function Counter({setCount, count, packsCount ,yesterdayCount}) {
  const totalCigarettes = count + packsCount * 20;
  return (
    <div className="h-96 w-full flex flex-col items-center justify-between border border-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Today's Count</h2>
      <div className={`w-52  h-52 rounded-full ${yesterdayCount - totalCigarettes >= 0?'bg-green-200':'bg-red-200'}  flex justify-center items-center`}>
        <div className="w-44 h-44 rounded-full flex items-center justify-center text-xl font-bold bg-white">
            <div className="flex flex-col items-center justify-center gap-1 h-24">
                <img src={cigarette} alt="cigarette icon" className="rotate-90 w-8 h-8" />
                <p className="text-2xl">{count}</p>
            </div>
            <div className="flex flex-col items-center justify-center h-24">
                <img className="w-9 h-9" src={packs} alt="pack icon" />
                <p className="text-2xl">{packsCount}</p>
            </div>
            
        </div>
      </div>
        <div className="w-1/2 flex justify-between">
            <button
            onClick={() =>count > 0 && setCount(count - 1)} 
            className="bg-white border border-gray-200 active:bg-green-200 w-14 h-14 rounded-full shadow-md  transition">-</button>
            <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-200 border border-gray-200 active:bg-red-200 w-14 h-14 rounded-full shadow-md transition">+</button>
        </div>
    </div>
  )
}