class HelloUser extends React.Component {
    render() {
        return (
            <div>
                Hello {this.state.username}
                <p>Change name: </p>
                <input type="text" value={this.state.username} onChange={this.handleNameChange}/>
            </div>
        );
    }

    constructor(props) {
        super(props);

        this.state = {
            username: props.username,

        };

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({ username: e.target.value });
    }
}

const init = () => {
    ReactDOM.render (
        <HelloUser username="Austin" />,
        document.getElementById('app')
    );
};

window.onload = init;
