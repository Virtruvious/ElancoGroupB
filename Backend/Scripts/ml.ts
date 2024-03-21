import * as brain from 'brain.js';

const data = [
    {input:[0,0], output:{zero:1}},
    {input:[0,1], output:{one:1}},
    {input:[1,0], output:{one:1}},
    {input:[1,1], output:{zero:1}},
];

const net = new brain.NeuralNetwork({});

let result = net.train(data);

console.log(result);
console.log(net.run([0,0]));