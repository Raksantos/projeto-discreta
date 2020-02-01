import random

''' Codificação do Alfabeto '''
alfabeto = { 
    'A': 2, 'B': 3, 'C': 4, 'D': 5,
    'E': 6, 'F': 7, 'G': 8, 'H': 9,
    'I': 10, 'J': 11, 'K': 12, 'L': 13,
    'M': 14, 'N': 15, 'O': 16, 'P': 17,
    'Q': 18, 'R': 19, 'S': 20, 'T': 21,
    'U': 22, 'V': 23, 'W': 24, 'X': 25,
    'Y': 26, 'Z': 27, ' ': 28
}

'''
Teste de Primalidade de Fermat
inputs:
    n: o número a ser testado, n > 3
    k: quantidade de testes de primalidade
output:
    False, se n for composto (não primo)
    True, caso contrário.
'''
def primalidade_fermat(n, k):
    if n <= 1 or n % 2 == 0:
        return False
    if n == 2 or n == 3:
        return True
    
    for _ in range(k):
        a = random.randint(2, n - 2)
        if(pow(a, n - 1, n) != 1):
            return False
    
    return True

''' Cálculo de MDC '''
def mdc(a, b):
    if(a % b == 0):
        return b
    else:
        return mdc(b, a % b)

''' Algoritmo de euclides estendido '''
def inverso_modular(a, n):
    t, r = 0, n
    t1, r1 = 1, a

    while r1 != 0:
        q = r // r1
        t, t1 = t1, t - (q * t1)
        r, r1 = r1, r - (q * r1)
    
    if r > 1:
        return False
    if t < 0:
        t = t + n
    
    return t

''' Gerar número primo de k bits '''
def gerar_primo(k):
    n = random.getrandbits(k)
    while not primalidade_fermat(n, 256):
        n = random.getrandbits(k)
    return n

''' Cálculo do número e '''
def calcular_e(p, q):
    n = (p - 1) * (q - 1)
    
    e = 2
    while (mdc(e, n) != 1) and e > 1:
        e = random.randint(3, n - 1)
    
    return e

''' Gerando chave pública '''
def gerar_chave_publica(p, q, e):
    n = p * q
    
    chave = {'e': str(e), 'n': str(n)}

    return chave

''' Gerando chave privada '''
def gerar_chave_privada(p, q, e):
    n = p * q
    m = (p - 1) * (q - 1)
    d = inverso_modular(e, m)

    chave = {'d': d, 'n': n}

    return chave

''' Encriptar mensagem '''
def encriptar(msg, e, n):
    msg = msg.upper()
    tam = len(msg)
    encriptado = ""
    
    for idx, char in enumerate(msg):
        codigo = pow(alfabeto[char], e, n)
        encriptado += str(codigo)

        if(idx + 1 != tam):
            encriptado += ' '

    return encriptado

''' Desencriptar mensagem '''
def desencriptar(msg, p, q, e):
    chave = gerar_chave_privada(p, q, e)
    alfabeto_reverso = dict(map(reversed, alfabeto.items()))
    desencriptado = ""

    for num in msg.split():
        codigo = pow(int(num), chave['d'], chave['n'])
        desencriptado += alfabeto_reverso[codigo]

    return desencriptado