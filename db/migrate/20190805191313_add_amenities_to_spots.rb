class AddAmenitiesToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :amenities, :string, array: true, default: []
  end
end
