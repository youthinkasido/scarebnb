
{
    entities: {
        spots: {
            1: {
                id: 1, 
                name: 'Island Paradise',
                description: 'A peaceful condo. Walking distance from the beach',
                max_guests: 5,
                room_type: 'Private',
                address: '3735 Spinnaker Resorts',
                country: 'US',
                state: 'South Carolina', 
                city: 'Hilton Head'
                neighbourhood: 'map',
                bedrooms: 2,
                bathrooms: 2,
                avail_start_date: 10/05/19, 
                avail_end_date: 10/10/19,
                rating: 10,
                total_cost: 500.00,
                amenities: ['gym', 'pool', 'spa' ,'beach', 'billiards']
                images: ['front.jpg','back.jpg','side.jpg']
            },

            users: {
                id: 1
                first_name: 'Lenny',
                last_name:  'D'Shwartz',
                email: 'theshwartzenator@gmail.com'
            },

            reviews: {
                id: 1
                review_by_user: 'Sporkus Blump',
                comment: 'I broke the couch',
                rating: 3
            },

             bookings: {
                id: 1
                start_date: '10/05/19',
                end_date: '10/15/19',
                guests: 4
            },
                
            ui: {
                loading: true/false
            },
                
            errors: {
                login: ["Incorrect username/password combination"]
      
            },
            session: { currentUserId: 25 }
            }
        }
    }
}


// Account creation - demo user ability
// readme 

// Hosting on heroku

// Bookings - booking a spot form

// Spots - the places you can book 

// Spot search - by location and availibility and google maps

// Ability to leave a review on a spot

// where is owner coming from?
// does spot need a review id?
// how to setup reviews table ?
// bookings table ?
// does spot have ammenities_id ?

// |  id  |  spot_id  |  review_id  |
// |  1   |    13     |      53     |
// |  2   |    13     |      23     |
// |  3   |    13     |      14     |
// |  4   |    15     |      42     |
// |  5   |    15     |      22     |

