import { useMemo } from 'react'
import type { ReactNode } from 'react'
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer'

import NodeChart from './NodeChart'

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 550, y: 20 },
  },

  {
    id: 'chart-1',
    type: 'nodeChart',
    data: {},
    position: { x: 300, y: 120 },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: 'chart-1', animated: true },
]

type Node = {
  id: string
  data: { label?: ReactNode | string }
  position: { x: number; y: number }

}
type Edge = { id: string; source: string; target: string }
type Props = {
  nodes: Node[]
  edges: Edge[]
}
function Canvas({ nodes, edges }: Props) {
  const nodeTypes = useMemo(() => ({ nodeChart: NodeChart }), [])

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      defaultNodes={nodes}
      defaultEdges={edges}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  )
}

function App() {
  return (
    <div className='w-full h-full flex flex-col justify-center space-y-2'>
      <h1 className="text-3xl font-bold text-center">Canvas</h1>
      <Canvas nodes={initialNodes} edges={initialEdges} />
    </div>
  )
}




export default App
