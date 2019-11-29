import React from 'react';
// import NewMessageForm from './newMessage';
import logo from "./images/logo-6.png"
import { connect } from "react-redux"
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
class Chat extends React.Component {

    state = {
        chat: {
            messages: []
        }
    }
    // const [chat, setChat] = useState(chatme)
    cache = new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,

    })
    messageSend = (message) => {

        let messages = [...this.state.chat.messages, message]
        this.setState({
            chat: { ...this.props.chat, messages }
        })
    }
    // console.log(chat)
    rowRenderer = ({
        key,         // Unique key within array of rows
        index,       // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible,   // This row is visible within the List (eg it is not an overscanned row)
        parent,
        style        // Style object to be applied to row (to position it)
    }) => {
        // console.log("style", style)
        const item = this.state.chat.messages[index]
        return (
            <CellMeasurer
                key={key}
                cache={this.cache}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
            >

                <div
                    style={{display:"flex", flexDirection: item.index?"row-reverse":"row",...style }}
                >
                    <div className="message" 
                    >
                        <div className={`message-content${item.index}`}>
                            <p style={{ fontSize: "12px", }}> {item.message} </p>
                        </div>

                    </div>
                </div>

            </CellMeasurer>
        )
    }
    componentDidMount() {
        this.setState({
            chat: this.props.chat
        })
    }
    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.chat.messages !== this.props.chat.messages) {
            this.setState({
                chat: this.props.chat
            })
        }
    }
    render() {


        const { chat } = this.state
        return (
            <div>
                <div class="header-spacer">

                    <img className="tab-icon"  src={logo} alt logo />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                            style={{ display: "flex", flexDirection: "column", justifyItems: "center",  }}
                        >
                            <div>
                                <div className="mesg-area-r">
                                    <div
                                        className="mainchatbox"
                                    >
                                        <List
                                            width={999}
                                            height={280}
                                            rowCount={chat.messages.length}
                                            rowHeight={({ index }) => { return chat.messages[index].message.length * 4 + 20 }}
                                            style={{ width: "100%", outline: "none" }}
                                            deferredMeasurementCache={this.cache}
                                            rowHeight={this.cache.rowHeight}
                                            rowRenderer={this.rowRenderer}
                                            scrollToIndex={chat.messages.length - 1}
                                        />
                                        {/* </div> */}
                                        {/* { messages} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = ({ chat: { chat } }) => ({
    chat: chat
})


export default connect(mapStateToProps)(Chat)
