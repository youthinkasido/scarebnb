class DeleteFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :created
    remove_column :reviews, :modified

  end
end



