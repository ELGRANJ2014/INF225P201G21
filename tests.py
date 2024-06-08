import unittest
import requests
import json
import datetime
from datetime import date

class AgendarHoraTestCase(unittest.TestCase):
    valid_source_destination_requests_data = None
    invalid_source_destination_requests_data = None

    user = "jesus.escanilla@usm.cl"
    password = "O3wQXCZtALttjNSf"

    @classmethod
    def setUpClass(cls):
        cls.base_url = "https://sa-east-1.aws.data.mongodb-api.com/app/data-rrozl/endpoint/test"

    @classmethod
    def tearDownClass(cls):
        del cls.valid_source_destination_requests_data
        del cls.invalid_source_destination_requests_data

    def testAgendarHora(self):
        payload = {'RUT': "1.111.111-1",
          'Nombre': "Jacinto",
          'Fecha': date(1999,1,1),
          'Fonasa': "A",
          'Medico': "Dr. Mengueche",
          'Alergias': "Polen",  
          'Observaciones': "Ninguna",
          'Diagnostico': "Alergia a la pala",
          'Tipo_de_examen': "Ecografía"}

        try:
            response = requests.post(self.base_url, data=payload, auth=(self.user, self.password))
        except Exception as e:
            print(f'Error: {e}')

        if response.status_code == 201: # Success on creating
            print('Hora agendada')

        if response.status_code == 400: # Invalid request
            print('Faltan datos por llenar')

        if response.status_code == 404: # Not found
            print('No se ha encontrado el recurso')

        print(response)

    def testAgendarHoraSinDatos(self):
        payload = {'RUT': '1.111.111-1',
          'Nombre': 'Jacinto',
          'Fecha': None,
          'Fonasa': 'A',
          'Medico': 'Dr. Mengueche',
          'Alergias': 'Polen',  
          'Observaciones': 'Ninguna',
          'Diagnostico': 'Alergia a la pala',
          'Tipo_de_examen': 'Ecografía'}

        try:
            response = requests.post(self.base_url, data=payload, json=self.valid_source_destination_requests_data, auth=(self.user, self.password))
        except Exception as e:
            print(f'Error: {e}')

        if response.status_code == 201: # Success on creating
            print('Hora agendada')

        if response.status_code == 400: # Invalid request
            print('Faltan datos por llenar')

        if response.status_code == 404: # Not found
            print('No se ha encontrado el recurso')

        print(response)
        


if __name__ == '__main__':
    unittest.main()