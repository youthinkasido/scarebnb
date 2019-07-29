class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false
      t.string :description, null:false
      t.integer :max_guests, null: false
      t.string :room_type, null: false
      t.string :address, null: false
      t.string :country, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.string :neighborhood, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :rating, null: false
      t.string :spot_type, null: false
      

      t.datetime :modified
      
    end
       add_index :spots, :name, unique: true
  end

   
end
