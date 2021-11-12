class CreateCryptos < ActiveRecord::Migration[6.1]
  def change
    create_table :cryptos do |t|
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
