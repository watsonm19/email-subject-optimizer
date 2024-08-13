from flask import Blueprint, request, jsonify
import openai  # If using OpenAI for AI

main = Blueprint('main', __name__)

@main.route('/api/generate-subject-lines', methods=['POST'])
def generate_subject_lines():
    data = request.json
    email_content = data.get('emailContent')
    
    # Example with OpenAI API
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=email_content,
        max_tokens=50
    )
    subject_lines = response.choices[0].text.strip().split('\n')
    
    return jsonify(subject_lines)
