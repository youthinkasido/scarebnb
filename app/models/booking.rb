 class Booking < ApplicationRecord
    validates :start_date, :end_date, :num_guests, :spot_id, :booker_id, :owner_id, :price_per_day, presence:true
    
   belongs_to :booker,
   foreign_key: :booker_id,
   class_name: 'User'
   
 end