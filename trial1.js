class Graph{
    constructor(){
        this.map=new Map()
    }
addVertex(vertex){
    this.map.set(vertex,[])
}
    insertVertex(vertex,edge,isBidirectional){
        if (!this.map.has(vertex)) {
            this.addVertex(vertex)
        }
        if (!this.map.has(edge)) {
            this.addVertex(edge)
        }
        this.map.get(vertex).push(edge)
        if (isBidirectional) {
            this.map.get(edge).push(vertex)
        }
    }

    delete(vertex){
        if (this.map.has(vertex)) {
            let edges=this.map.get(vertex)
            for (const i of edges) {
                let edge=this.map.get(i)
                let index=edge.indexOf(vertex)
                if (index!=-1) {
                    edge.splice(index,1)
                }
            }
            this.map.delete(vertex)
        }
    }

    bfs(start){
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
        let visited=new Set()
        let stack=[start]
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

const g = new Graph();
g.insertVertex(9, 11, true);
g.insertVertex(9, 5, true);
g.insertVertex(9,6,false)
g.insertVertex(5, 7, false);
g.insertVertex(6,16,true)
// console.log(g.search(3))
g.delete(5)
// g.display()
g.bfs(9)
console.log("dfs");
g.dfs(9)
