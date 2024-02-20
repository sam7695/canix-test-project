class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :product_id, null: false, index: { unique: true }
      t.decimal :weight
      t.string :category
      t.string :unit
      t.datetime :date

      t.timestamps
    end
  end
end
