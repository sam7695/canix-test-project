# frozen_string_literal: true

require 'csv'

class ProductsCsvImporter
  def self.import(file)
    errors = []

    CSV.foreach(file.path, headers: true) do |row|
      product_data = row.to_h
      product_data['category'] = product_data['product_id'].first(3)
      product = Product.new(product_data)

      errors << { row: row.to_h, errors: product.errors.full_messages } unless product.save
    end

    errors
  rescue CSV::MalformedCSVError => e
    { status: 'Error', message: 'Failed to process the CSV file', error: e.message }
  end
end
