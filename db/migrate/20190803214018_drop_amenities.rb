class DropAmenities < ActiveRecord::Migration[5.2]
  def change
    drop_table :amenities
  end
end
