
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, reset } from './features/slices/counterSlice';
import { store } from './store';



function App() {

const {count} = useSelector((store:any)=>store.counter)
const dispatch=useDispatch()
  return <div className="w-[70%] mx-auto mt-10 ">
  <h1 className="mb-3">count : {count}</h1>
  <button onClick={()=>dispatch(increase(1))} className="bg-gray-400 px-2 py-1 rounded-lg hover:bg-gray-500 mr-3">increase</button>
  <button  onClick={()=>dispatch(decrease(1))} className="bg-gray-400 px-2 py-1 rounded-lg hover:bg-gray-500 mr-3">decrease</button>
  <button  onClick={()=>dispatch(reset(0))} className="bg-gray-400 px-2 py-1 rounded-lg hover:bg-gray-500 mr-3">reset</button>
  </div>
 
  
}

export default App
