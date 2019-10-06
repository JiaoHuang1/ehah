class AddBusinessPhoneNumber < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :phone, :string
  end
end
