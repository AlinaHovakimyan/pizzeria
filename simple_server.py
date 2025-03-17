import http.server
import socketserver

PORT = 8000

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        # Get the length of the data
        content_length = int(self.headers.get('Content-Length', 0))
        # Read the POST data
        post_data = self.rfile.read(content_length)
        print("Received POST data:", post_data.decode('utf-8'))
        
        # Respond with a 200 OK and a simple message
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        response_message = "POST request received!"
        self.wfile.write(response_message.encode('utf-8'))

# Create an instance of the server
with socketserver.TCPServer(("", PORT), MyRequestHandler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
