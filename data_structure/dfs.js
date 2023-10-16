const graph = {
    0:[1,2,3],
    1:[4,5],
    2:[],
    3:[],
    4:[6],
    5:[],
    6:[]
}
function DFS(graph, node, visited = []) {
    if (visited.indexOf(node) === -1) {
        visited.push(node);
				// 첫번재 함수호출에서 visited에 [0]이들어간다
        for (let neighbor of graph[node]) {
						// 각각 0에 있는 1,2,3이 순차적으로 실행됨 visited는 [0]
            DFS(graph, neighbor, visited);
        }
    }
    return visited;
}

// 첫번째 시작 -> 0
// 방문 목록에 0을 추가
// 그리고 0 노드의 이웃을 방문한다. -> 1, 2, 3 순서로 방문하게 됨
// 1먼저 들어감
// 1 노드에는 [4, 5]가 있었습니다
// 방문노드에 1 추가
// 이때 방문 목록이 [0, 1]
// 4먼저 들어감!
// dfs(grapg, 4, [0, 1])
// 방문목록에 [0, 1, 4]
// 4에는 [6]이 있습니다.
// 6방문
// dfs(grapg, 6, [0, 1, 4])
// 방문목록에 6 추가
// 이제 return이 이루어짐
// dfs(dfs(dfs(dfs()))
// 이제 영기서 반복문 4, 5 중에 5를 시작할 것임
// dfs(graph, 5, [0, 1, 4, 6])
// 방문할 노드 없음
// 여기서 반복문 1, 2, 3 중에 2 시작
// dfs(graph, 2, [0, 1, 4, 6, 5])

// const result = DFS(graph,0);
// console.log(result);



const tree = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [4, 6]];
// 아래 함수를 변경해주세요
function DFS(graph, start) {
    let visited = [];
    let stack = [start];
    while (stack.length !== 0) {
        let current = stack.pop();
                // indexOf는 배열안의 값을 살펴보고 없으면 -1을 리턴한다.
        if (visited.indexOf(current) === -1) {
            visited.push(current);
                        // 방문한 적이 없는 인접 노드를 찾고 인접노드들로 만든다.
                        // currunt가 찾고자 하는 값이면 return 
                        if(current===target){
                                return current
                        }
            let neighbors = graph[current].filter(n => visited.indexOf(n) === -1);
                        // 스택에 방문할 노드들을 추가한다.
                        // concat은 배열을 합치는데 사용된다.
            stack = stack.concat(neighbors);
        }
    }
        // 없으면 
    return -1;
}