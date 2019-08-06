class AddIndexToSpot < ActiveRecord::Migration[5.2]
  def change
       add_index :reviews, :spot_id, unique: true
  end
end
