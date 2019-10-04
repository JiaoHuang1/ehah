class ChangeBusinessHourDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :weekday_open_hour, :string
    change_column :businesses, :weekday_close_hour, :string
    change_column :businesses, :weekend_open_hour, :string
    change_column :businesses, :weekend_close_hour, :string
  end
end
