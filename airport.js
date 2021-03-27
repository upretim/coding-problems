//https://www.youtube.com/watch?v=cWNEl4HE2OE
// this function takes airports a string and routes array as connections

const airports =['PHX','BKK','OKC','JFK','LAX','MEX','EZE','HEL','LOS','LAP','LIM'];
const routes =[
    ['PHX','LAX'],
    ['PHX','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK']
];

function getList(airports, routes){
    let map = new Map();
    for(let airport of airports){
        map.set(airport, []);
    }
    for(let route of routes){
        map.get(route[0]).push(route[1]);
        map.get(route[1]).push(route[0]);
    }
    return map;
}


function areConnected(airport1, airport2){
    let list = getList(airports, routes);
    let visited = new Set();
    let queue = [airport1];
    while(queue.length){
        let connectedAirports = list.get(queue.shift());
        for(connectedAirport of connectedAirports){
            if(!visited.has(connectedAirport)){
                queue.push(connectedAirport);
                visited.add(connectedAirport);
                if(connectedAirport===airport2) return true;
            }
        }
    }
    if(visited.has(airport2)) return true;
    return false;
}

console.log(areConnected('PHX','BKK'));
