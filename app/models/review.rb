class Review < ApplicationRecord
validates :comment, :rating, :created, presence: true

# belongs_to :user, 
# foreign_key: :reviewer_id

belongs_to :spot,
foreign_key: :spot_id

end