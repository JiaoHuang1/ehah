class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :business_id
  end
end
