import { Search } from 'lucide-react';
import { useDevice } from '../../context/device-context'

const SearchRooms = () => {

  const { search, setSearch } = useDevice();

  const onRoomSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div  className='mt-5'>
      <div  className="w-full bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm">
        <div  className="relative w-full">
          <Search 
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text" 
            value={search}
            onChange={onRoomSearchChange}
            placeholder='Search rooms, room type or device ID...'
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchRooms