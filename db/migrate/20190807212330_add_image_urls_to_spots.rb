class AddImageUrlsToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :image_urls, :string, array: true, default: []
  end
end
