from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app)

# app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/proyecto"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/mochileando_form"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Formulario(db.Model):  #  hereda de db.Model
    """
    Definición de la tabla en la base de datos.
    La clase hereda de db.Model.
    Esta clase representa la tabla en la base de datos.
    """
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    mail = db.Column(db.String(50))
    asunto = db.Column(db.String(100))
    mensaje = db.Column(db.String(500))

    def __init__(self, nombre, apellido, mail, asunto, mensaje):
        """
        Constructor de la clase .
        """
        self.nombre = nombre
        self.apellido = apellido
        self.mail = mail
        self.asunto = asunto
        self.mensaje = mensaje

    # Se pueden agregar más clases para definir otras tablas en la base de datos

with app.app_context():
    db.create_all()  # Crea todas las tablas en la base de datos

# Definición del esquema para la clase 
class FormularioSchema(ma.Schema):

    class Meta:
        fields = ("id", "nombre", "apellido", "mail", "asunto", "mensaje")

formulario_schema = FormularioSchema()  # Objeto para serializar/deserializar 
formularios_schema = FormularioSchema(many=True)  # Objeto para serializar/deserializar múltiples 

# @app.route("/contacto", methods=["GET"])
# def get_formulario():
#     all_formularios = Formulario.query.all()  # Obtiene todos los registros de la tabla de productos
#     result = formularios_schema.dump(all_formularios)  # Serializa los registros en formato JSON
#     return jsonify(result)  # Retorna el JSON de todos los registros de la tabla


@app.route("/contacto", methods=["POST"])  # Endpoint para crear un 
def save_formulario():
    
    nombre = request.json["nombre"]  
    apellido = request.json["apellido"]  
    mail = request.json["mail"]  
    asunto = request.json["asunto"]  
    mensaje = request.json["mensaje"] 
    new_formulario = Formulario(nombre, apellido, mail, asunto, mensaje)  
    db.session.add(new_formulario)  
    db.session.commit()  # Guarda los cambios en la base de datos

    formulario_dict = {
        "nombre": new_formulario.nombre, 
        "apellido": new_formulario.apellido, 
        "mail": new_formulario.mail,
        "asunto": new_formulario.asunto,
        "mensaje": new_formulario.mensaje
    }
    return jsonify(formulario_dict)  # Retorna el JSON del nuevo producto creado

# Programa Principal
if __name__ == "__main__":
    # Ejecuta el servidor Flask en el puerto 5000 en modo de depuración
    app.run(debug=True, port=5000)
   