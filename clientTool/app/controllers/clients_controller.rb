class ClientsController < ApplicationController
	def index
		respond_with Client.all
	end
	
	def update
		client = Client.find(params[:id])
		client.update(client_params)

		respond_with client 
	end

	private
		def client_params
			params.require(:client).permit(:name, :status, :telefon, :club, :comment)
		end
end
