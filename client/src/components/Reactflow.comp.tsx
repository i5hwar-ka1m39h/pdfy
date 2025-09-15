import React, {  useCallback } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Edge,
  type Connection,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import cuid from "cuid"
const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

const generateId = () => cuid()

const ReactflowBase = () => {
  const {screenToFlowPosition} = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((edgeSnapshot) => addEdge(params, edgeSnapshot)),
    [setEdges]
  );

  const onDragOver = (e:React.DragEvent<HTMLDivElement>) =>{
    e.preventDefault();
    e.dataTransfer.dropEffect ="move"
  }

  const onDrop = useCallback((e:React.DragEvent<HTMLDivElement>)=>{
    console.log("on drop triggered");
    
    e.preventDefault()
    const nodeData = e.dataTransfer.getData("application/reactflow");
    console.log(`this is the node data ${nodeData}`);
    
    if(!nodeData) return;

    const {nodeType} = JSON.parse(nodeData);
    if(!nodeType) return;

    console.log(nodeType);
    
    const positon = screenToFlowPosition({
      x:e.clientX,
      y:e.clientY
    })

    const newNode = {
      id:generateId(),
      position : positon,
      type: nodeType,
      data : {label:`the label is ${nodeType}`}
    }

    setNodes((preNode)=>preNode.concat(newNode))


  },[screenToFlowPosition, setNodes])


  return (
    
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        onDragOver={e =>onDragOver(e)}
        onDrop={e=>onDrop(e)}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} gap={10} />
      </ReactFlow>
    
  );
};

const ReactflowComp = () =>{
  return(
    <div className="w-screen h-screen">
    <ReactFlowProvider>
      <ReactflowBase/>
    </ReactFlowProvider>
    </div>
  )
}
export default ReactflowComp;
