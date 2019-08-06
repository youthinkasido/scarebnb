class Review < ApplicationRecord
validates :comment, :rating, presence: true

belongs_to :spot,
foreign_key: :spot_id,
class_name: 'Spot'

belongs_to :reviewer,
foreign_key: :reviewer_id,
class_name: 'User'

end