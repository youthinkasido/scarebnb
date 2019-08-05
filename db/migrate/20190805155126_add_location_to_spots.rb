class AddLocationToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :lat, :integer, null: false
    add_column :spots, :lng, :integer, null: false
  end
end
