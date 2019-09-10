import React, {Component} from  'react'

class NowDate extends Component {

    state = {
        date: ''
    }
    componentDidMount = () => {
        this.getDate()
    }

    getDate = () => {
        let nowDate = new Date().toLocaleDateString();
        this.setState({
            date: nowDate,
        })
    }

    render() {
        return(
            <div className="NowDate">
                <p> {`Today is ${this.state.date}`} </p>
                <p> It's time to be productive :)</p>
            </div>
        )
    }
}

export default NowDate 