class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :country
      t.string :name
      t.string :club
      t.string :telefon
      t.string :status
      t.string :comment

      t.timestamps null: false
    end
  end
end
