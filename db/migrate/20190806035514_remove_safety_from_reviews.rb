class RemoveSafetyFromReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :created, :datetime
    change_column :reviews, :modified, :datetime

  end
end

