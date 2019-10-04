class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :price_rating, null: false
      t.text :description, null: false
      t.time :weekday_open_hour
      t.time :weekday_close_hour
      t.time :weekend_open_hour
      t.time :weekend_close_hour
      t.string :website
      t.timestamps
    end
  end
end
