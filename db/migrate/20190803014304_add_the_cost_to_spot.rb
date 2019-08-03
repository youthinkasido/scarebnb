class AddTheCostToSpot < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :cost_per_night, :string, null: false
  end
end
