

class DateContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }
    handleClick = (event) => {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-12 example-col">
                    <p>Controlled DateRangePicker</p>
                    <DateRangePicker
                        show={this.state.show}
                    />&nbsp;
                    <button className="k-button k-primary" onClick={this.handleClick}>Toggle</button>
                </div>
                <div className="col-xs-12 col-md-12 example-col">
                    <p>Always shown</p>
                    <DateRangePicker
                        show={true}
                    />
                </div>
            </div>
        )
    }
}
