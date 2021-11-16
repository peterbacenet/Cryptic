class CreateWatchlists < ActiveRecord::Migration[6.1]
  def change
    create_table :watchlists do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :data
      t.string :T
      t.decimal :c
      t.decimal :h
      t.decimal :l
      t.decimal :n
      t.decimal :o
      t.decimal :t
      t.decimal :v
      t.decimal :vw
      t.timestamps
    end
  end
end
