class MakeChangeOnUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :zipcode, :string
    add_column :users, :birthday_month, :integer
    add_column :users, :birthday_day, :integer
    add_column :users, :birthday_year, :integer
  end
end


