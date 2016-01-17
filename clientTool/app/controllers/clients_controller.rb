class ClientsController < ApplicationController
	def index
		respond_with Client.all
	end
	
	def update
		respond_with Client.find(params[:id])
	end
end
