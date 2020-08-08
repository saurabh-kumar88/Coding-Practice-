from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
	#return("hello world")
	return render_template('home/test2.html', title="Homepage")

if __name__ == '__main__':
	app.run(debug=True)