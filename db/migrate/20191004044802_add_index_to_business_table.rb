class AddIndexToBusinessTable < ActiveRecord::Migration[5.2]
  def change
    add_index :businesses, :name
    add_index :businesses, [:latitude, :longitude]
    add_index :businesses, [:name, :latitude, :longitude], unique: true
  end
end
