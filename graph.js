class Graph {
  constructor() {
    this.map = new Map();
  }

  addVertex(data) {
    this.map.set(data, []);
  }

  insert(vertex, edge, isBidirectional) {
    if (!this.map.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.map.has(edge)) {
      this.addVertex(edge);
    }
    this.map.get(vertex).push(edge);
    if (isBidirectional) {
      this.map.get(edge).push(vertex);
    }
  }

  display() {
    for (let [key, value] of this.map.entries()) {
      console.log(key,":",value);
    }
  }

  search(vertex){
    if (this.map.has(vertex)) {
      return this.map.get(vertex)
    }
    else{

      return "not found"
    }
  }

  delete(vertex){
    if (this.map.has(vertex)) {
      const edges=this.map.get(vertex)
      for (const i of edges) {
        const edge=this.map.get(i)
        const index=edge.indexOf(vertex)
        if (index!=-1) {
          edge.splice(index,1)
        }
      }
      this.map.delete(vertex)
    }
  }
  bfs(start){
    if (!this.map.has(start)) {
      return console.log("not found")
    }
    const visited=new Set()
    const queue=[start]
    visited.add(start)
    while (queue.length>0) {
let vertex=queue.shift()
console.log(vertex);
let neighbours=this.map.get(vertex)
for (const neighbour of neighbours) {
  if (!visited.has(neighbour)) {
    visited.add(neighbour)
queue.push(neighbour)
  }
  
}
    }
  }

  dfs(start){
    if (!this.map.has(start)) {
      return console.log("not found");
    }
    const visited=new Set()
    const stack=[start]
    visited.add(start)
    while (stack.length>0) {
      let vertex=stack.pop()
      console.log(vertex);
      let neighbours=this.map.get(vertex)
      for (const neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour)
          stack.push(neighbour)
        }
      }

    }
  }


}

const gr = new Graph();
gr.insert(9, 11, true);
gr.insert(9, 5, true);
gr.insert(9,6,false)
gr.insert(5, 7, false);
gr.insert(6,16,true)
// console.log(gr.search(3))
gr.delete(5)
gr.display()
gr.bfs(9)
console.log("dfs");
gr.dfs(9)




