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

@main.route('/api/generate-subject-lines', methods=['POST'])
def generate_subject_lines():
    data = request.json
    email_content = data.get('emailContent')
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Generate an effective formal email subject line based on the following email content."},
            {"role": "user", "content": email_content}
        ],
        max_tokens=50,
        n=3,  # Generates 3 different subject lines
        stop=None
    )
    
    subject_lines = [choice.message.content.strip() for choice in response.choices]
    
    return jsonify(subject_lines)