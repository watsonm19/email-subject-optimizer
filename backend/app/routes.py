import openai
import os

from dotenv import load_dotenv
from flask import Blueprint, request, jsonify

load_dotenv()

main = Blueprint('main', __name__)

# Set the OpenAI API key
client = openai.OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPENAI_API_KEY"),
)

@main.route('/api/generate-formal-subject-lines', methods=['POST'])
def generate_formal_subject_lines():
    data = request.json
    email_content = data.get('emailContent')

    if not email_content:
        return jsonify({'error': 'Email content is required'}), 400
    
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Generate an effective and brief formal email subject line based on the following email content. There should be zero emojis contained in the generated subject. Do not repeat the same subject line multiple times. Vary the responses."},
                {"role": "user", "content": email_content}
            ],
            max_tokens=50,
            n=3,
            stop=None
        )
        
        # Clean up the subject lines
        subject_lines = []
        for choice in response.choices:
            line = choice.message.content.strip()
            # Remove "Subject:" if it's at the start of the string
            if line.lower().startswith("subject: "):
                line = line[len("subject: "):].strip()
            # Remove wrapping quotation marks if present
            if line.startswith('"') and line.endswith('"'):
                line = line[1:-1].strip()
            subject_lines.append(line)
        
        return jsonify(subject_lines)
    
    except openai.error.OpenAIError as e:
        return jsonify({'error': str(e)}), 500


@main.route('/api/generate-casual-subject-lines', methods=['POST'])
def generate_casual_subject_lines():
    data = request.json
    email_content = data.get('emailContent')

    if not email_content:
        return jsonify({'error': 'Email content is required'}), 400
    
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Generate an effective and brief casual email subject line based on the following email content. Do not repeat the same subject line multiple times."},
                {"role": "user", "content": email_content}
            ],
            max_tokens=50,
            n=3,
            stop=None
        )
        
        # Clean up the subject lines
        subject_lines = []
        for choice in response.choices:
            line = choice.message.content.strip()
            # Remove "Subject:" if it's at the start of the string
            if line.lower().startswith("subject: "):
                line = line[len("subject: "):].strip()
            # Remove wrapping quotation marks if present
            if line.startswith('"') and line.endswith('"'):
                line = line[1:-1].strip()
            subject_lines.append(line)
        
        return jsonify(subject_lines)
    
    except openai.error.OpenAIError as e:
        return jsonify({'error': str(e)}), 500