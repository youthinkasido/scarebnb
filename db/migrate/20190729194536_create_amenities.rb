class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :name, null: false
      t.datetime :created, null: false
      t.datetime :modified, null: false
    end
  end
end
