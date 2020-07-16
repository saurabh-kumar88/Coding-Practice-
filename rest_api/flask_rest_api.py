# Using flask to make an api 
# import necessary libraries and functions 
from flask import Flask, jsonify, request 

# creating a Flask app 
app = Flask(__name__) 

# on the terminal type: curl http://127.0.0.1:5000/ 
# returns hello world when we use GET. 
# returns the data that we send when we use POST. 
@app.route('/', methods = ['GET', 'POST']) 
def home(): 
	if(request.method == 'GET'): 

		data = "Hello world"
		return jsonify({'data': data}) 


# A simple function to calculate the square of a number 
# the number to be squared is sent in the URL when we use GET 
# on the terminal type: curl http://127.0.0.1:5000 / home / 10 
# this returns 100 (square of 10) 
@app.route('/home/<float:num>', methods = ['GET']) 
def square(num):
	 
	return jsonify({ 'data': num**2 }) 

@app.route('/msg/<string:msg>', methods = ['GET']) 
def display_msg(msg):
	
	message = "Hello from " + str(msg) 
	return jsonify({ 'data':  message})

@app.route('/Path/<path:path_name>', methods = ['GET']) 
def display_path(path_name):
	
	Path_name = "PAth entered by You : " + str(path_name) 
	return jsonify({ 'data':  Path_name })


#________________TEst Data_____________

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


#___________________Finding Specific Resource________________

@app.route('/Books_id/<int:id>', methods=['GET'])
def Find_by_id(id):

	
	data = []

	for book in books:
		if book['id'] == id:
			data.append(book)

	if len(data) == 0:
		return "Error : No such id found, Please provide some valid id "

	return jsonify({'data' : data})



# driver function 
if __name__ == '__main__': 

	app.run(debug = True) 
