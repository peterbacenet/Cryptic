class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :watchlist
      t.boolean :admin
      t.string :name
      t.string :password

      t.timestamps
    end
  end
end
