const heading = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {}, "Hello"),
        React.createElement('h2', {}, 'welcome')
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'to'), 
        React.createElement('h2', {},  'the code area')
    ])
]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);