# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# pass 2 args in method, array and letter
# use select method, selects word from array and words including that letter
# use .include? method
# { |word| words.include?(letter)}
# p returnMe(array, letter)

def returnMe(array, letter)
  array.select { |word| word.include?(letter)}
end
#  p returnMe(beverages_array,filter_letter_o) 
#  p returnMe(beverages_array,filter_letter_t) 

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# def fxn alphabetize takes in a hash
#  create empty results array
#  access hash values and shovel all values into result
#  return flattend result array and sort it

 def alphabetize hash
  result = []
  array_of_values = hash.values
  result << array_of_values
  result.flatten.sort 
 end

#  or hash.values.flatten.sort
#  p alphabetize us_states
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# create class called Bike
# create initialize method with model, wheels, current speed
# initialize val of wheels to 2
# initialize default val of 0 to current speed
# use attr_accessor and pass in symbols before initialize
# create bike_info method
#  return sentence with all data from bike obj

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster num
    @current_speed += num
  end

  def brake num
    @current_speed -= num
    if @current_speed < 0
      @current_speed = 0
    end
    @current_speed
  end
end
bike = Bike.new("Trek")
# p bike.bike_info

p bike.pedal_faster(10)
p bike.pedal_faster(18)
p bike.brake(5)
p bike.brake(25)
# "The Trek bike has 2 wheels and is going 0 mph."
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# create a pedal_faster method inside of Bike class
# pass in num as parameter
# increment speed by given num
# create brake method inside bike class
# pass in num as param
# decrement speed by given num
#  if speed < 0 assign speed = 0
# return current_speed




# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code: