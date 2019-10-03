class AddNullFalseConstraintToUserTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :zipcode
    add_column :users, :first_name, :string, default: :false
    add_column :users, :last_name, :string, default: :false
    add_column :users, :zipcode, :string, default: :false
  end
end
