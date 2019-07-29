class CreateSpotAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :spot_amenities do |t|
      t.integer :spot_id, null: false
      t.integer :amenity_id, null: false
    end
  end
end
