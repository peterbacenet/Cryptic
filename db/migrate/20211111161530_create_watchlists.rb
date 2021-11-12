class CreateWatchlists < ActiveRecord::Migration[6.1]
  def change
    create_table :watchlists do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.text :list, array: true, default: []

      t.timestamps
    end
  end
end
