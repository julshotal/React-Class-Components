class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                Hello world!
            </div>
        )
    }
}

const init = () => {
    ReactDOM.render(
        <HelloWorld />,
        document.getElementById('app'),
    );
}

window.onload = init;
