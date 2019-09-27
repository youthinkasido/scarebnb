class AddImageUrlToBooking < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :booking_image_url, :string
  end
end
