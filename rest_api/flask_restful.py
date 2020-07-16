# using flask_restful 
from flask import Flask, jsonify, request 
from flask_restful import Resource, Api 

# creating the flask app 
app = Flask(__name__) 
# creating an API object 
api = Api(app) 



# Create some test data for our catalog in the form of a list of dictionaries.
books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]




# making a class for a particular resource 
# the get, post methods correspond to get and post requests 
# they are automatically mapped by flask_restful. 
# other methods include put, delete, etc. 
class Hello(Resource): 

	# corresponds to the GET request. 
	# this function is called whenever there 
	# is a GET request for this resource 
	def get(self): 

		return jsonify({'message': 'hello world'}) 

	# Corresponds to POST request 
	def post(self): 
		
		data = request.get_json()	 # status code 
		return jsonify({'data': data}), 201


# another resource to calculate the square of a number 
class Square(Resource): 

	def get(self, num): 

		return jsonify({'square': num**2})

class Massage(Resource):
	def get(self, msg):

		return jsonify({'massage' : msg})

class Books_info(Resource):
	def get(self):
		return jsonify({'books' : books}) 

#_________________Finding Specific Resources__________________

class Books_id(Resource):
	
	def get(self, id):
		
		data = []

		for book in books:
			if book['id'] == id:
				data.append(book)

		if len(data) == 0:
			return "Error : No such id found, Please provide some valid id"

		return jsonify(data)


# Define url here
# adding the defined resources along with their corresponding urls 
api.add_resource(Hello, '/') 
api.add_resource(Square, '/square/<int:num>')
api.add_resource(Massage, '/massage/<string:msg>')
api.add_resource(Books_info, '/books/') 
api.add_resource(Books_id, '/books_id/<int:id>' )

# driver function 
if __name__ == '__main__': 

	app.run(debug = True) 
	


"""

base url:  https://www.mediawiki.org/w/
api.php?action=centralnoticechoicedata&project=wikipedia&language=en

https://www.mediawiki.org/w/api.php?action=centralnoticechoicedata&project=wikipedia&language=en

"""
