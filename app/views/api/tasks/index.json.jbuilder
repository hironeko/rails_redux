json.tasks(@tasks) { |t| json.extract! t, :id, :name }
