class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :spot_id, null: false
      t.integer :reviewer_id, null: false
      t.text :comment, null: false
      t.integer :rating, null: false
      t.datetime :created, null: false 
      t.datetime :modified, null: false
    end
  end
end
