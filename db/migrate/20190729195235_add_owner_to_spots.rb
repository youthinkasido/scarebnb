class AddOwnerToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :owner_id, :integer
  end
end
