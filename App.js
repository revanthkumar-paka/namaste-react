
/*
<div id="parent">
<div id="child1">
<h1>I'm an h1 Element</h1>
<h2>I'm an h2 Element</h2>
</div>
<div id="child2">
<h1>I'm an h1 Element</h1>
<h2>I'm an h2 Element</h2>
</div>
</div>
*/ 
const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I'm an h1 Element"),
    React.createElement("h2",{},"I'm an h2 Element")
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm an h1 Element"),
    React.createElement("h2",{},"I'm an h2 Element")
])
]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)