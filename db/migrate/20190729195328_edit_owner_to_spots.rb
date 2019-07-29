class EditOwnerToSpots < ActiveRecord::Migration[5.2]
  def change
    change_column :spots, :owner_id, :integer, null:false
  end
end
