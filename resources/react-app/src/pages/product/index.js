import {Component} from "react";
import {connect} from "react-redux";
import {fetchTickets} from "../../store/actions/ticketsAction";


class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetchTickets()
    }

    render() {
        console.log("aaaa", this.props.dataSource)
        return (
            <div>
                <div className={`box`}>
                    <div className={`card`}>
                        Welcome to Product
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        dataSource: state
    };
}
export default connect(mapStateToProps, {fetchTickets})(Product);
