class Review < ApplicationRecord
validates :comment, :rating, presence: true

belongs_to :spot


belongs_to :reviewer,
class_name: 'User'

end