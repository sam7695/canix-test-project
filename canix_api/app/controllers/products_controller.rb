# frozen_string_literal: true

class ProductsController < ApplicationController
  def create
    errors = Array.wrap(params[:files]).map { |file| ProductsCsvImporter.import(file) }.flatten

    if errors.empty?
      render json: { status: 'Success', message: 'All CSV files have been processed successfully' }, status: :ok
    elsif errors.all? { |e| e.is_a?(Hash) && e[:status] == 'Error' }
      render json: errors.first, status: :unprocessable_entity
    else
      render json: { status: 'Partial Success', message: 'Some records could not be processed', errors: },
             status: :accepted
    end
  end

  def index
    render json: Product.all
  end
end
