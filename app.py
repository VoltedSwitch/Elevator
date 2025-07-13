from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def elevator():
    return render_template("elevator.html")


if __name__ == "__main__":
    app.run(debug=True)
