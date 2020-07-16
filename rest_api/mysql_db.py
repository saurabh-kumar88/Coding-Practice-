"""
NOTE: Rest Api integration with database
"""
import flask
from flask import request, jsonify
import mysql.connector as mysql

app = flask.Flask(__name__)
app.config["DEBUG"] = True


#db macros
LOCALHOST = 'localhost'
USER = 'root'
PASSWORD = 'saw99'
DATABASE = 'NewsAggregator'


#_____________________test code____________________

test_data = [(1, '2014', 'Ann Leckie ', 'Ancillary Justice', 'The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it.'), (2, '2013', 'John Scalzi', 'Redshirts', 'From the top of the large boulder he sat on, Ensign Tom Davis looked across the expanse of the cave, toward Captain Lucius Abernathy, Science Officer Q’eeng and Chief Engineer Paul West perched on a second, larger boulder, and thought, Well, this sucks.'), (3, '2012', 'Jo Walton', 'Among Others', 'The Phurnacite factory in Abercwmboi killed all the trees for two miles around.'), (4, '2011', 'Connie Willis', 'Blackout, All Clear (Vol. 2 - Blackout)', 'By noon Michael and Merope still hadn’t returned from Stepney, and Polly was beginning to get really worried.'), (5, '2010', 'Paolo Bacigalupi', 'The Windup Girl', '“No! I don’t want the mangosteen.”')]




def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


class Mysql_db:
	def help(self):
		"""Mysql_db is a api to handle all db operations like read, filter, and query"""
	pass


	def read_all_records(self,table_name):
		self.table_name = table_name

		# mysql init
		db = mysql.connect(
			host=LOCALHOST,
			user=USER,
			password=PASSWORD,
			database=DATABASE,
			)
		
		cursor = db.cursor()		
		query = "SELECT * FROM  " + table_name
		cursor.execute(query)
		records = cursor.fetchall()
		cursor.close()

		return records

	def filter_records(self, table_name, filter, query_arg):
		self.table_name = table_name
		self.filter = filter
		self.query_arg = query_arg

		# mysql init
		db = mysql.connect(
			host=LOCALHOST,
			user=USER,
			password=PASSWORD,
			database=DATABASE,
			)

		cursor = db.cursor()

		## defining query
		query = "SELECT * FROM table_name WHERE filter=query_arg"

		cursor.execute(query)
		records = cursor.fetchall()

		return records


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Welcome to News Aggregator web Api</h1>
<p>A prototype API for distant reading of latest news feeds.</p>'''


@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
    
    mysql_obj = Mysql_db()
    data = mysql_obj.read_all_records('books')
    print(data)

    return jsonify(data)
    

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route('/api/v1/resources/news', methods=['GET'])
def api_filter():
    query_parameters = request.args

    id = query_parameters.get('id')
    published = query_parameters.get('published')
    author = query_parameters.get('author')
    title = query_parameters.get('title')
  

    query = "SELECT * FROM books WHERE"
    to_filter = []

    if id:
        query += ' id=? AND'
        to_filter.append(id)
    if published:
        query += ' published=? AND'
        to_filter.append(published)
    if author:
        query += ' author=? AND'
        to_filter.append(author)
    if title:
        query += ' title=? AND'
        to_filter.append(title)
    if not (id or published or author or title):
        return page_not_found(404)

    query = query[:-4] + ';'


    conn = sqlite3.connect('books.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()

    results = cur.execute(query, to_filter).fetchall()

    return jsonify(results)


if __name__ == '__main__':
	#app.run(debug=True)
	
	




	'''t1 = (1, '2014', 'Ann Leckie ', 'Ancillary Justice', 'The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it.')
	d = {}
	for idx, col in enumerate(t1):
	    print("\nidx ",idx, " ---------- ", col )'''

	

	'''
	print("_________________________test code____________________")
	# Python program to illustrate 
	# enumerate function 
	l1 = ["eat","sleep","repeat"] 
	s1 = "geek"

	# creating enumerate objects 
	obj1 = enumerate(l1) 
	obj2 = enumerate(s1) 

	print ("Return type:",type(obj1)) 
	print (list(enumerate(l1)) ) 

	# changing start index to 2 from 0 
	print (list(enumerate(s1)) )
	''' 










