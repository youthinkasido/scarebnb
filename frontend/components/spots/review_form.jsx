import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 5,
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.returnToShowPage = this.returnToShowPage.bind(this)
    }

    returnToShowPage() {

        this.props.history.push(`/spots/${this.props.match.params.spotId}`) // how? where are we setting spotId?
        // after submiting review form, redirects to review page.

    }


    handleSubmit(e) {
        e.preventDefault()
        const spotId = parseInt(this.props.match.params.spotId); //? match
        const review = Object.assign({}, this.state, {
            spot_id: spotId
        })
        this.props.createReview(review) // coming in from review container

        this.props.returnToShowPage
    }


    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


    render() {
        return (

            <div className="review-form">
                <div>
                    <input id="star-4" type="radio" name="rating" value="star-4" />
                        <label htmlFor="star-4" title="4 stars">
                        <i className="active fa fa-star" aria-hidden="true"></i>
                    </label>

                    <input id="star-3" type="radio" name="rating" value="star-3" />
                        <label htmlFor="star-3" title="3 stars">
                        <i className="active fa fa-star" aria-hidden="true"></i>
                    </label>

                    <input id="star-2" type="radio" name="rating" value="star-2" />
                        <label htmlFor="star-2" title="2 stars">
                        <i className="active fa fa-star" aria-hidden="true"></i>
                    </label>

                    <input id="star-1" type="radio" name="rating" value="star-1" />
                        <label htmlFor="star-1" title="1 star">
                        <i className="active fa fa-star" aria-hidden="true"></i>
                    </label>

                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>Rating</label>



                    <input
                        type="number"
                        value={this.state.rating}
                        onChange={this.update('rating')}
                    />

                    <label>Comment</label>

                    <textarea
                        cols="20"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.update('comment')}
                    />

                    <input type="submit" />
                </form>
                {/* <button onClick={this.navigateToBenchShow}>Cancel</button> */}
            </div>

        )
    }
}

export default withRouter(ReviewForm)