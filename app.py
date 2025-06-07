from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

QUESTIONS = [
    "Can you summarize the main contribution of your thesis?",
    "Why did you choose this research methodology?",
    "How does your work compare with existing studies?",
    "What are the limitations of your research?",
    "What future work do you propose?",
    "How did you validate your results?",
    "Which part of your thesis are you most proud of?",
]

@app.route('/')
def index():
    question = random.choice(QUESTIONS)
    return render_template('index.html', question=question)

@app.route('/question')
def question():
    return jsonify({'question': random.choice(QUESTIONS)})

if __name__ == '__main__':
    app.run(debug=True)
