import openai
import os
from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)

# Set the OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

@main.route('/api/generate-subject-lines', methods=['POST'])
def generate_subject_lines():
    data = request.json
    email_content = data.get('emailContent')
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Generate an effective formal email subject line based on the following email content."},
            {"role": "user", "content": email_content}
        ],
        max_tokens=50,
        n=3,  # Generate 3 subject lines
        stop=None
    )
    
    subject_lines = [choice['message']['content'].strip() for choice in response['choices']]
    
    return jsonify(subject_lines)
