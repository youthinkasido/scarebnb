class AddNameToSpotAmenities < ActiveRecord::Migration[5.2]
  def change
    add_column :spot_amenities, :name, :string
  end
end
