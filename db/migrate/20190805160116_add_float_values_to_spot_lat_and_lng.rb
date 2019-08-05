class AddFloatValuesToSpotLatAndLng < ActiveRecord::Migration[5.2]
  def change
    change_column :spots, :lat, :float, null: false
    change_column :spots, :lng, :float, null: false
  end
end
