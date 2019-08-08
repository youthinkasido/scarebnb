class ChangePriceDataOnBookings < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :price_per_day, :string, null:false
  end
end
