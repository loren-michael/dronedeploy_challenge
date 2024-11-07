class AddImageUrlToImages < ActiveRecord::Migration[7.1]
  def change
    add_column :images, :image_url, :string
  end
end
