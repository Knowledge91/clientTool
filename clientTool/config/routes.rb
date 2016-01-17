Rails.application.routes.draw do
	root to: 'application#angular'

	resources :clients
end
