class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.datetime :start_date, null: false
       t.datetime :end_date, null: false
        t.integer :num_guests, null: false
        t.integer :spot_id, null: false
        t.integer :booker_id, null: false
        t.integer :owner_id, null: false
        t.integer :price_per_day
        

    end
    add_index :bookings, :spot_id
    add_index :bookings, :owner_id

  end
end
