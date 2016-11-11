10.times do |i|
  Item.create!(name: "Item #{i}", description: "I am a description for item #{i}.")
end