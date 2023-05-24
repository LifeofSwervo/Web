const rootElement = document.querySelector('#root1');
const root = ReactDOM.createRoot(rootElement);

const update = () => {
    const element1 = React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            null,
            React.createElement('input', {
                type: 'text',
            })
        ),
        React.createElement(
            'span',
            null,
            'Time: ',
            new Date().toLocaleTimeString()
        )
    );
    root.render(element1);
};

setInterval(update, 1000);