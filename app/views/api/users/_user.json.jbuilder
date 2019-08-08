json.extract! user, :id, :email, :first_name, :last_name
# json.extract! user, :id, :email


json.set 
json.booking_ids @user.bookings.ids

