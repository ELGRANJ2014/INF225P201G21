import unittest
import requests
import json

class AgendarHoraTestCase(unittest.TestCase):
    valid_source_destination_requests_data = None
    invalid_source_destination_requests_data = None

    user = "jesus.escanilla@usm.cl"
    password = "O3wQXCZtALttjNSf"

    @classmethod
    def setUpClass(cls):
        cls.base_url = "https://sa-east-1.aws.data.mongodb-api.com/app/data-rrozl/endpoint/data/v1"

    @classmethod
    def tearDownClass(cls):
        del cls.valid_source_destination_requests_data
        del cls.invalid_source_destination_requests_data

    @classmethod
    def testAgendarHora(self):
        payload = {'RUT': '1.111.111-1',
          'Nombre': 'Jacinto',
          'Fecha': '1935-03-01',
          'Fonasa': 'A',
          'Medico': 'Dr. Mengueche',
          'Alergias': 'Polen',
          'Observaciones': 'Ninguna',
          'Diagnostico': 'Alergia a la pala',
          'Tipo_de_examen': 'Ecografía',}

        response = requests.post(self.base_url, json=self.valid_source_destination_requests_data, auth=(self.user, self.password))
        
        print(response)


if __name__ == '__main__':
    unittest.main()