from flask import Flask,request,render_template,jsonify, redirect


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process',methods= ['POST'])
def process():
    firstName = request.form['firstName']
    lastName = request.form['lastName']
    output = firstName + lastName
    if firstName and lastName:
        return jsonify({'output':'Full Name: ' + output})
    return jsonify({'error' : 'Missing data!'})


@app.route('/process2',methods=['POST'])
def process2():
    
    return redirect('../')


if __name__ == "__main__":
    app.run(debug=True)