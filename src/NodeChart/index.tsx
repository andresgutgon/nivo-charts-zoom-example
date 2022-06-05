import { Handle, Position, useReactFlow, useStore } from 'react-flow-renderer'
import Button from '../components/Button'
import LineChart from './LineChart'
const zoomSelector = (s: any) => s.transform[2]
const NodeChart = () => {
  const zoom = useStore(zoomSelector)
 const { zoomTo } = useReactFlow()
  const disabled = zoom === 1
  return (
    <div className='rounded border border-gray-100 p-4 w-[900px] h-[600px] flex flex-col justify-center'>
      <div className='w-full flex justify-center'>
        <Button onClick={() => zoomTo(1)} disabled={disabled}>Reset zoom</Button>
      </div>
      <LineChart />
      <Handle type="target" position={Position.Top} id="a" />
    </div>
  )
}

export default NodeChart
