import React from "react";


class NewMessageForm extends React.Component {
    state = {
        text: "",
        showEmojis: false,
    };


    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { text } = this.state
        const textMessage = {
            message: "text",
            index: 1
        }
        setTimeout(()=>{
            this.props.messageSend({ ...textMessage })
        },500)
        this.setState({ text: "" });
    }




    render() {

        return (
            <div className="newMessageForm">
                <form onSubmit={this.handleSubmit} className="newMessageForm" style={{ width: "90%" }}>
                    <input
                        className="input"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Type a message and hit ENTER"
                    />
                </form>

            </div>
        );
    }
}

export default NewMessageForm;
