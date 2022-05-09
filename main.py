from flask import Flask, render_template

main = Flask(__name__)


@main.route('/')
@main.route('/home')
def index():
    return render_template('index.html')


@main.route('/article')
def article():
    return "Some article here"


@main.route('/user/<string:name>/<int:id>')
def user(name, id):
    return "User:" + name + str(id)


if __name__ == '__main__':
    main.run(debug=True)
