
{
    entities: {
        properties: {
           1:{ 
               id: 1,
                name: "House in the Wilderness",
                description: "A beautiful secluded house in the wild",
                user_id: 2234,
                property_type_id: 2146,
                address: "5234 nature avenue"
            } 

        },

        
        property_images: {
            1: { 
                id: 1,
                property_id: 1132,
                added_by_user: 'TonyGunk123',  
                image: '123.jpg',
                created: 10/5/2019,
                status: 'TINYINT'
            }
            
        },


          property_type: {
            1: { 
                id: 1,
                name: 'Condo',
                icon_image: 'Condo',  
                created: 'DATETIME',
                modified: 'DATETIME',
                status: 'TINYINT'
            }
            
        },


         room_type: {
            1: { 
                id: 1,
                name: 'Huge', // ?
                icon_image: 'Bigroom.jpg', // ? 
                created: 'DATETIME',
                modified: 'DATETIME',
                status: 'TINYINT'
            }
            
        },
        
        
        property_reviews: {
            1: { 
                id: 1,
                property_id: 1132,
                review_by_user: 'Shlunky78',  
                booking_id: 187,
                comment: 'This place was absolutely Kosher',
                rating: '10',
                created: 'DateTime',
                modified: 'DateTime',
                status: 'TINYINT'
            }
        },

          
        property_ammenities: {
            1: { 
                id: 1,
                property_id: 1132,
                amenity_id: 123,  
                created: 'DateTime',
                modified: 'DateTime',
                status: 'TINYINT'
            }
        },

        amenities: {
            1: { 
                id: 1,
                name: 'Indoor Pool and Heated Spa'
                icon_image: 'pool.jpg',  
                created: 'DateTime',
                modified: 'DateTime',
                status: 'TINYINT'
            }
        },
        
        users: {
                1: { 
                id: 1,
                first_name: 'Jim',
                last_name: 'Smith',  
                email: 'john@gmail.com',
                password: 'lol123',
                messages: 'hey jim, hope you enjoy your stay. there are fresh towels in the bathroom!'
               
            
            }
        }, 
           transactions: {
                1: { 
                id: 1,
                property_id: 'Jim',
                receiver_id: 'Smith',  
                email: 'john@gmail.com',
                password: 'lol123',
                messages: 'hey jim, hope you enjoy your stay. there are fresh towels in the bathroom!'
            }

        }, 





        ui: {
            loading: true / false
        },
        errors: {
            login: ["Incorrect username/password combination"],
              
        },

        session: { currentUserId: 25 }
    }


    
    }
}

// 1 example for everything 
// map information, front end sample state shape
// make a project repo 
// reduc
properties, property_images, property_type, room_type, property reviews, property_amenities, amenities 
users, transactions, bookings, promo codes, currencies, disputes, languages, email_contents, email_content_languages
// cms_pages, cms_page_languages
//
cities, states, countries

categories, subcategories, neighbourhood, neighbour_type

25 things.



// the help page?
// level of functionality required and detail for users?
// can ids be random for now
// status for images
// what other errors?