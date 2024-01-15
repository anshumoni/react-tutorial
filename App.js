const heading = React.createElement('div',{
    id:'container'
},React.createElement('div',{
    id:'inner'
},[React.createElement('h1',{
    id:'heading'
},'Hello World'),React.createElement('h2',{
    id:'heading1'
},'Hello World in h2')]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
