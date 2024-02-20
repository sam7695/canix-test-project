# frozen_string_literal: true

class Product < ApplicationRecord
  validates :product_id, uniqueness: true
end
