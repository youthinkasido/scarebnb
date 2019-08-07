import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        
        this.state = {
            rating: 0,
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
        // debugger
        const review = Object.assign({}, this.state, {
            spot_id: spotId
        })
        // debugger
        this.props.createReview(review)
        this.setState({ comment: '' }) 
        
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


    render() {
        return (
            <div className="review-form">
                <fieldset className="rating">
                    <input onChange={this.update('rating')} type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                    <input onChange={this.update('rating')} type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                    <input onChange={this.update('rating')} type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                    <input onChange={this.update('rating')} type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                    <input onChange={this.update('rating')} type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                </fieldset>

                <form onSubmit={this.handleSubmit}>
                    <label>Comment</label>
                    <textarea
                        cols="20"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.update('comment')}
                    />

                    <input type="submit" />
                </form>
            </div>

        )
    }
}

export default withRouter(ReviewForm)