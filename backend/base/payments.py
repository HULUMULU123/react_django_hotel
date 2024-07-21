from yookassa import Configuration, Payment
import uuid
from django.shortcuts import redirect, render
from rest_framework.response import Response
from django.shortcuts import HttpResponse
from datetime import timedelta, datetime
from rest_framework.decorators import api_view, permission_classes
from email.message import EmailMessage
import ssl
import smtplib
SECRET_KEY = 'test_80nfHSIw8FhUgm4M7vZtd3TnRCNuSHomw10UGbKhiRI'
SHOP_ID = '338135'
Configuration.secret_key = SECRET_KEY
Configuration.account_id=SHOP_ID
email_sender = 'stas.r.d87@gmail.com'
email_password = 'nhdz flkn ybhv hkhv'
email_reciever = 'srudenko2005@gmail.com'

subject = 'Hotel payment'


em = EmailMessage()
em["From"] = email_sender
em['Subject'] = subject


context = ssl.create_default_context()

@api_view(['POST', 'GET'])
def payment_func(request):
    if len(dict(request.data)) == 0: return False
    data = dict(request.data)
    
    # price = request.data['price']
    price = data['price'][0]
    idempotence_key = uuid.uuid4()
    currency = 'RUB'
    description = 'Оплата бронирования'
    payment = Payment.create({
        "amount": {
            "value": str(price),
            "currency": currency
        },
        "confirmation": {
            "type": "redirect",
            "return_url": 'http://127.0.0.1:8000/api/success' 
        },
        "receipt": {
            "customer": {
                "full_name": "Ivanov Ivan Ivanovich",
                "email": "email@email.ru",
                
                
            }},
        "capture": True,
        "test": True,
        "description": description,
        'metadata': {
            'email': 'stas@gmail.com' 
        }
    }, idempotency_key=idempotence_key)
    confirmation_url = payment.confirmation.confirmation_url
    return redirect(confirmation_url)


def payment_list(request):
    today = datetime.now()
    output_date = datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")
    yesterday = today - timedelta(days=1)
    yesterday_1=yesterday.strftime("%Y-%m-%dT%H:%M:%SZ")
    tomorrow = today + timedelta(days=1)
    tomorrow_1=tomorrow.strftime("%Y-%m-%dT%H:%M:%SZ")
    print(yesterday)
    data = {
    "limit": 1,                                    # Ограничиваем размер выборки
    "payment_method": "yoo_money",                 # Выбираем только оплату через кошелек
    "created_at.gte": yesterday_1,  # Созданы начиная с 2020-08-08
    "created_at.lt": tomorrow_1    # И до 2020-10-20
}
    res = Payment.list(data)
    for payment in res.items:
        
        print(payment.metadata['email'])
        print(payment.status)
        body = """<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<title>A simple, clean, and responsive HTML invoice template</title>

		<!-- Favicon -->
		<link rel="icon" href="./images/favicon.png" type="image/x-icon" />

		<!-- Invoice styling -->
		<style>
			body {
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				text-align: center;
				color: #777;
			}

			body h1 {
				font-weight: 300;
				margin-bottom: 0px;
				padding-bottom: 0px;
				color: #000;
			}

			body h3 {
				font-weight: 300;
				margin-top: 10px;
				margin-bottom: 20px;
				font-style: italic;
				color: #555;
			}

			body a {
				color: #06f;
			}

			.invoice-box {
				max-width: 800px;
				margin: auto;
				padding: 30px;
				border: 1px solid #eee;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
				font-size: 16px;
				line-height: 24px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				color: #555;
			}

			.invoice-box table {
				width: 100%;
				line-height: inherit;
				text-align: left;
				border-collapse: collapse;
			}

			.invoice-box table td {
				padding: 5px;
				vertical-align: top;
			}

			.invoice-box table tr td:nth-child(2) {
				text-align: right;
			}

			.invoice-box table tr.top table td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.top table td.title {
				font-size: 45px;
				line-height: 45px;
				color: #333;
			}

			.invoice-box table tr.information table td {
				padding-bottom: 40px;
			}

			.invoice-box table tr.heading td {
				background: #eee;
				border-bottom: 1px solid #ddd;
				font-weight: bold;
			}

			.invoice-box table tr.details td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.item td {
				border-bottom: 1px solid #eee;
			}

			.invoice-box table tr.item.last td {
				border-bottom: none;
			}

			.invoice-box table tr.total td:nth-child(2) {
				border-top: 2px solid #eee;
				font-weight: bold;
			}

			@media only screen and (max-width: 600px) {
				.invoice-box table tr.top table td {
					width: 100%;
					display: block;
					text-align: center;
				}

				.invoice-box table tr.information table td {
					width: 100%;
					display: block;
					text-align: center;
				}
			}
		</style>
	</head>

	<body>
		<h1>A simple, clean, and responsive HTML invoice template</h1>
		<h3>Because sometimes, all you need is something simple.</h3>
		Find the code on <a href="https://github.com/sparksuite/simple-html-invoice-template">GitHub</a>. Licensed under the
		<a href="http://opensource.org/licenses/MIT" target="_blank">MIT license</a>.<br /><br /><br />

		<div class="invoice-box">
			<table>
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								<td class="title">
									<img src="./images/logo.png" alt="Company logo" style="width: 100%; max-width: 300px" />
								</td>

								<td>
									Invoice #: 123<br />
									Created: January 1, 2023<br />
									Due: February 1, 2023
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									Sparksuite, Inc.<br />
									12345 Sunny Road<br />
									Sunnyville, TX 12345
								</td>

								<td>
									Acme Corp.<br />
									John Doe<br />
									john@example.com
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="heading">
					<td>Payment Method</td>

					<td>Check #</td>
				</tr>

				<tr class="details">
					<td>Check</td>

					<td>1000</td>
				</tr>

				<tr class="heading">
					<td>Item</td>

					<td>Price</td>
				</tr>

				<tr class="item">
					<td>Website design</td>

					<td>$300.00</td>
				</tr>

				<tr class="item">
					<td>Hosting (3 months)</td>

					<td>$75.00</td>
				</tr>

				<tr class="item last">
					<td>Domain name (1 year)</td>

					<td>$10.00</td>
				</tr>

				<tr class="total">
					<td></td>

					<td>Total: $385.00</td>
				</tr>
			</table>
		</div>
	</body>
</html>"""
        em.set_content(body, subtype='html')
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_reciever, em.as_string())
    
    return HttpResponse({"status": "okay"})