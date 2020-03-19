from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('template.html')

@app.route('/paddle_game')
def paddle_game():
    return render_template('game_layout.html')


@app.route('/bottle_game')
def bottle_game():
    return render_template('bottle_game.html')


if __name__ == '__main__':
    app.run(debug=True,
            host='0.0.0.0',
            port=5000)