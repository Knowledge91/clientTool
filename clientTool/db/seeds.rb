json = ActiveSupport::JSON.decode(File.read('db/clients.json'))

json.each do |item|
  Client.create!(country: item['country'], name: item['name'], club: item['club'], telefon: item['telefon'])
end
