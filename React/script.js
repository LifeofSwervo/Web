
const update = () => {
    // Javascript
    const element2 = `
        <h3>Javascript:</h3>
        <form>
            <input type="text"/>
        </form>
        <span>Time: ${new Date().toLocaleTimeString()}</span>
    `;
    document.querySelector('#root2').innerHTML = element2;
};

setInterval(update, 1000);