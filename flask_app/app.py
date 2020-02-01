from rsa import RSA
from flask import Flask, abort, request, jsonify
app = Flask(__name__)

@app.route('/')
def helloWorld():
    return 'Hello World!'

@app.route('/rsa/gerar-primo', methods=['GET'])
def gerar_primo():
    primo = RSA.gerar_primo(256)
    return jsonify({'result': str(primo)})

@app.route('/rsa/gerar-numero-e', methods=['POST'])
def gerar_e():
    if not request.json:
        abort(400)

    p = int(request.json['p'])
    q = int(request.json['q'])

    e = RSA.calcular_e(p, q)
    
    return jsonify({'result': str(e)})

@app.route('/rsa/gerar-chave-publica', methods=['POST'])
def gerar_chave_publica():
    if not request.json:
        abort(400)

    p = int(request.json['p'])
    q = int(request.json['q'])
    e = int(request.json['e'])

    chave = RSA.gerar_chave_publica(p, q, e)

    return jsonify({'result': chave})

@app.route('/rsa/encriptar', methods=['POST'])
def encriptar():
    if not request.json:
        abort(400)
    
    msg = request.json['msg']
    e = int(request.json['e'])
    n = int(request.json['n'])

    msg_encriptada = RSA.encriptar(msg, e, n)

    return jsonify({'result': msg_encriptada})

@app.route('/rsa/desencriptar', methods=['POST'])
def desencriptar():
    if not request.json:
        abort(400)
    
    msg = request.json['msg']
    p = int(request.json['p'])
    q = int(request.json['q'])
    e = int(request.json['e'])

    msg_desencriptada = RSA.desencriptar(msg, p, q, e)

    return jsonify({'result': msg_desencriptada})